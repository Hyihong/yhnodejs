import React,{Component} from 'react' 
import axios from 'axios' 
import {  Row,Col,Calendar,Modal,Form, Icon, Input, Button, Checkbox  } from 'antd' 

import "./style.less"

const FormItem = Form.Item;


/**
 * param: 
 * fieldsError: Object
 */

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => !!fieldsError[field] );
}

/**
 * param: 
 * fields: Array
 * validate: Function
 */
function getAllFilesTouched( fields,validate ){
      return fields.every( field => validate( field ) )
}

class LoginModal extends Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(nextStates,nextProps){

    }
    handleModalCancel =()=>{
        this.props.onCancel();
    }

    handleSubmit=(e)=>{
        //e.preventDefault();
        //const { validateFields } = this.props.form ;

        //登录方法之一： ajax方法 ： ajax无法在后端进行重定向，只能返回处理结果，再借由前端进行页面跳转
        // validateFields( (err,value)=>{
        //     var loginPromise = axios({
        //             method: 'POST',
        //             url:'/api/login',
        //             headers:{
        //                 Accept:"text/html"
        //             },
        //             data: {
        //             username: value.username,
        //             password: value.password,
        //             }
        //         });
        //     loginPromise.then( response=>{
        //          console.log( response )
        //     },err=>{
        //         console.log(err)
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        //  })

        // 登录方法之二（当前使用）:采用表单提交，登录失败的消息借由cookie传递 ;(这样的方式不知是否合理？)

    }
    render(){
        const { visible } = this.props;
        const { getFieldDecorator,getFieldsError,getFieldError,isFieldTouched,isFieldsTouched } = this.props.form;

        //表单域被触发过才解禁登录按钮.
        const allFieldsTouched =  getAllFilesTouched(['username','password'], isFieldTouched ) ;
        const fieldsHasError = hasErrors(getFieldsError()) 
        
        //console.log( "表单是否有误"+ fieldsHasError )
        //console.log( "是否已经全部触发"+ allFieldsTouched )


        return(
            <Modal visible={visible} 
                   cancelText = "取消"
                   closable={ true }
                   footer={null}
                   title="登录"
                   width={400}
                   style={{top:"250px"}}
                   wrapClassName="yh-loginModal-custom-wrapper"
                   onCancel ={this.handleModalCancel}
            
            >
                 <Form className="yh-login-form"  onSubmit={ this.handleSubmit } method="post" action="/api/login">
                        <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '用户名不能为空' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.55)' }} />} placeholder="Username" name="username"/>
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '密码不能为空' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.55)' }} />} type="password" placeholder="Password" name="password"/>
                        )}
                        </FormItem>
                        <FormItem>

                        <Button type="primary"  htmlType="submit" className="login-form-button" style={{width:"100%"}}
                                //onClick ={ this.handleSubmit }
                                disabled ={ !( allFieldsTouched && !fieldsHasError )  }
                        >
                            登录
                        </Button>
                        </FormItem>
                    </Form>
            </Modal>
        )
    }
}

const WrappedLoginModal = Form.create()(LoginModal);

export default WrappedLoginModal ;