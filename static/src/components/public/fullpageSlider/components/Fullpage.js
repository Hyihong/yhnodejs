import React from 'react';
import ScrollSwipe from 'scroll-swipe';
import root from 'window-or-global';
import { WindowSize } from 'react-fns';
import { detectBrowser, constants, scrollTo, renderUtils, INTENT_MAP, composedPath } from '../utils';
import Slide from './Slide';

const { noOp } = constants;

let global = {};

const TIMEOUT = 200;

const documentStub = () => {
  const style = {};
  return {
    querySelectorAll: () => [<div></div>],
    documentElement: {
      style
    },
    body: {
      style
    }
  };
}


function determineVerticalRoot() {
  let userAgent, platform;

  const { document } = global;

  if (typeof navigator !== 'undefined' && navigator) {
    ({ userAgent, platform } = navigator);
  }

  if (!userAgent) {
    return document.body;
  }

  // http://developer.samsung.com/technical-doc/view.do?v=T000000203
  if (/SAMSUNG.*Build\//.test(userAgent)) {
    return document.body;
  }

  const browser = detectBrowser(userAgent);

  if (!browser) {
    return document.body;
  }

  // NOTE: various browsers and devTools handle this differently as the userAgent source of truth
  // To get the root scrollable element we have to play around with OS and browser to find the right
  // root to return. If need be we can be specific about version

  const { name, version, os } = browser; // eslint-disable-line no-unused-vars
  const [ major, minor, patch ] = version.split('.'); // eslint-disable-line no-unused-vars

  const docElementSet = new Set([
    'firefox',
    'chrome',
    'ios', // iPad (chrome devtools)
    'crios', // chrome ios (chrome devtools)
    'ie'
  ]);

  // Some platforms conflict with the devtools when it comes to supporting document.body
  // In order to support both user-agents in chrome devtools and the native device we need to
  // check for both browser name and device platform
  const conflictingPlatforms = new Set(['iPhone','iPad']);

  if (docElementSet.has(name) && !conflictingPlatforms.has(platform)) {
      return document.documentElement;
  }

  // safari, chrome ios etc
  return document.body;
}

function isEligible(idx, props, state) {
  const { slides } = props;
  const { activeSlide } = state;

  if (state.scrollPending) {
    return false;
  }

  if (props.infinite) {
    return true;
  }

  if (idx > slides.length - 1 || idx < 0) {
    return false;
  }

  if (idx == activeSlide) {
    return false;
  }

  return true;
}

function ssStub() {
  return {
    flush: noOp,
    killAll: noOp,
    listen: noOp
  };
}

//组件类
class Fullpage extends React.Component {
  constructor(props) {
    super(props);

    const { infinite, resetSlides,slides ,activeSlide = 0, scrollSpeed = 500 , onSlideChangeStart, onSlideChangeEnd }  = this.props;

    global.window = root;
    global.document = global.window.document || documentStub();
  
    if ( infinite && resetSlides) {
      throw new Error('Fullpage Component cannot have both infinite and resetSlides as truthy props');
    }
    if (!slides || !slides.length) {
      throw new Error('Please provide slides for Fullpage');
    }

    this.name = 'Fullpage';
    this.scrollSpeed = scrollSpeed;
    this.node = null;
    this.ss = null;
    this.verticalRoot = determineVerticalRoot();
    this.onSlideChangeStart = onSlideChangeStart || noOp;
    this.onSlideChangeEnd = onSlideChangeEnd || noOp;
    this.isLocked = false;
    this.hSlideCache = {};
    this.cacheHslide = (slide) => {
      this.hSlideCache[slide.name] = slide;
    }

    this.state = {
      scrollPending: false,
      window: null,
      document: null,
      activeSlide,
      lastActive: activeSlide - 1
      };


  }
  
  componentDidMount() {
    this.hideScrollBars();

    this.window = global.window;
    this.document = global.document;

    this.setState({
      window: global.window,
      document: global.document
    }, () => {
      this.initScroll();
    });
  }


  initScroll =()=> {
    const {  scrollSensitivity, touchSensitivity } = this.props;

    const ss = new ScrollSwipe({
      target: this.node,
      scrollSensitivity: scrollSensitivity,
      touchSensitivity: touchSensitivity,
      scrollPreventDefault: true,
      touchPreventDefault: true,
      scrollCb: this.onScrollAction,
      touchCb: this.onScrollAction
    });
    this.ss = ss;
    this.isLocked = true;
  }


  componentWillUnmount() {
    //删除实例
    const ss = this.ss || ssStub();
    ss.killAll();
    this.ss = null; 
    this.showScrollBars();
    
    
  }


  hideScrollBars() {
    const { document } = global;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  showScrollBars() {
    const { document } = global;
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  }

  onScrollAction =({direction, intent, startEvent }) =>{
    const { ss = ssStub() } = this;

    if (this.state.scrollPending) {
      ss.flush();
      return ss.listen();
    }

    // at this point we are dedicating
    const dir = INTENT_MAP[direction];
    if (direction === 'VERTICAL') {
      return this.onVerticalScroll(dir[intent], startEvent);
    }

  }

  onVerticalScroll=(intent)=> {
    const { window, activeSlide } = this.state;
    const { slides } = this.props;

    const next = intent === 'DOWN' ? activeSlide + 1 : activeSlide - 1;
    if (next < 0 || next > slides.length - 1) {
      const { ss = ssStub() } = this;
      ss.flush();
      return ss.listen();
    }

    const to = next * window.innerHeight;
    const newState = {
      activeSlide: next,
      lastActive: activeSlide
    };

    this.setState({ scrollPending: true }, () => {
       this.handleScroll(this.verticalRoot, 'scrollTop', to, newState, this.name);
    });
  }
 

  handleScroll = (node, winProp, to, newState, compName, cb = noOp)=> {
    const ss = this.ss || ssStub();

    ss.flush();
    const cancellable = this.onSlideChangeStart(compName, this.props, this.state, newState[compName] || newState);

    if (cancellable === true) {
      return;
    }

    scrollTo(node, winProp, to, this.scrollSpeed, () => {
      newState.scrollPending = false;
      this.setState(newState, () => {
        cb();
        this.onSlideChangeEnd(compName, this.props, this.state, newState[compName] || newState);
        setTimeout(() => {
          ss.flush();
          ss.listen();
        }, TIMEOUT);
      });
    });
  }
 
  changeFullpageSlide =(idx)=>{

    const { props, state, name, verticalRoot } = this;
    const { activeSlide, window } = state;

    const eligible = isEligible(idx, props, state);

    if (!eligible) {
      return;
    }

    const newState = {
      activeSlide: idx,
      lastActive: activeSlide
    };

    const to = idx * window.innerHeight;

    this.setState({ scrollPending: true }, () => {
      this.onSlideChangeStart(name, props, state, newState);
      this.handleScroll(verticalRoot, 'scrollTop', to, newState, name);
    });
  }

  render() {
    const p = this.props;
    const { window, activeSlide } = this.state;

    const children = p.children || null;

    if (!window) {
      return children;
    }

    const elements = p.slides.reduce((result, sl) => {
      if (!sl) {
        return result;
      }
      if (typeof sl.type == 'function') {
        result.push(sl);
      } 

      return result;
    }, []);
     
  
    // TODO: sub other for children
    return (
        <WindowSize
          render={({ width, height }) => {
            setTimeout(() => {
              this.verticalRoot.scrollTop = activeSlide * height;
            }, 0);
            return (
              <div ref={node => (this.node = node)} className="Fullpage">
                {elements.map((sl, i) => {
                  const sp = sl.props || {};
                  const children = sp.children;
                  return <Slide render={true} className={sp.className || ''} id={sp.id} width={width} height={height} key={i} {...sp}>
                      {children}
                    </Slide>;
                })}
              </div>
            );
          }}
        />
    );
  }
}


export default Fullpage;
