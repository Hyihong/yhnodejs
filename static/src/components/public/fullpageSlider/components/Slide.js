import React from 'react';

const HorizontalSlide = 'HorizontalSlide';
const VerticalSlide = 'VerticalSlide';

const Slide = ({ id, render, className, width, height, horizontal, horizontalSliderName, children, style }) => {

  const slideStyle = style || {};

  const styles = Object.assign({
    overflow: 'hidden', width: `${width}px`, height: `${height}px`, position: 'relative'
  }, slideStyle);

  let slideClassName = horizontal ? [HorizontalSlide] : [VerticalSlide];
  if (className) {
    slideClassName.push(className);
  }
  slideClassName = slideClassName.join(' ');

  const attrs = {
    'data-slide': horizontal ? HorizontalSlide : VerticalSlide,
    'data-horizontal-slider': horizontalSliderName || null
  };
  
  // function analysisRenderContent( c ){
  //      if( c.type && c.type=== 'function' ){
  //         if(c.type.name !=='TweenOne'){
  //           analysisRenderContent(c.props.children)
  //         }
  //      }else{
  //         return c ;
  //      }
  // }

  //let renderContont = analysisRenderContent(children);


 
  return (
    <div className={slideClassName} id={id} {...attrs} style={styles}>
        { render ? children : null}
    </div>
  );
}

export default Slide;
