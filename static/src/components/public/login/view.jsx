import React,{Component} from 'react' 
import axios from 'axios' 
import {  Row,Col,Calendar,Modal,Form, Icon, Input, Button, Checkbox,message  } from 'antd' 

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

        // ajax方法 ： ajax无法在后端进行重定向，只能返回处理结果，再借由前端进行页面跳转
        e.preventDefault();
        const { validateFields } = this.props.form ;
        validateFields( (err,value)=>{
            var loginPromise = axios({
                    method: 'POST',
                    url:'/api/public/login',
                    headers: {'X-Requested-With': 'XMLHttpRequest'},
                    // headers:{
                    //     Accept:"json/html"
                    // },
                    data: {
                    username: value.username,
                    password: value.password,
                    }
                });

            loginPromise.then( response=>{
                 if( response.status === 200 ){
                      if( response.data.code !== 0 ){
                          message.error(response.data.message )
                      }else{
                        //验证成功
                        if (window.localStorage) {
                            localStorage.setItem("token", response.data.token);	
                        }else{
                            message.error("浏览器版本过低，不支持当前技术（localStorage）")
                        }
                        //跳转页面
                        window.location.href = '/admin'
                      }
                 }
            },err=>{
                console.log(err)
            }).catch(err=>{
                console.log(err)
            })
         })
    }

    render(){
        const { visible } = this.props;
        const { getFieldDecorator,getFieldsError,getFieldError,isFieldTouched,isFieldsTouched } = this.props.form;

        //表单域被触发过才解禁登录按钮.
        const allFieldsTouched =  getAllFilesTouched(['username','password'], isFieldTouched ) ;
        const fieldsHasError = hasErrors(getFieldsError()) 

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