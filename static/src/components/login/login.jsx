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

    handleSubmit=()=>{
        const { validateFields } = this.props.form ;
         validateFields( (err,value)=>{
            var loginPromise = axios({
                    method: 'post',
                    url: '/login',
                    data: {
                    username: value.userName,
                    password: value.password,
                    }
                });
            loginPromise.then( response=>{
                 console.log( response )
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
        const allFieldsTouched =  getAllFilesTouched(['userName','password'], isFieldTouched ) ;
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
                 <Form className="yh-login-form">
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '用户名不能为空' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.55)' }} />} placeholder="Username" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '密码不能为空' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.55)' }} />} type="password" placeholder="Password" />
                        )}
                        </FormItem>
                        <FormItem>

                        <Button type="primary"  className="login-form-button" style={{width:"100%"}}
                                onClick ={ this.handleSubmit }
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