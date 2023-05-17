import React, { Component } from "react";
import { connect } from "react-redux";
import './index.scss';
import { userLoginAction } from "../../Store/actions/authAction";
import { Button, Form, Input, notification } from 'antd';
import { login } from "../../Controller/api/authServices";
import { Image as Images } from "../Images";


const openNotification = () => {
  notification.open({
    message: 'Invalid Credentials',
    description:
      'Please check your Email Id and Password and try again!',
  });
};
class Login extends Component {
  state={
    loading:false
  }
  // onLoginHandler = (data) => {
  //   console.log('here')
  //   userLoginAction({ data: 'hello' })
  // }
  onFinish = (values) => {
    console.log('Success:', values);
    this.setState({
      loading:true
    })
    login(values).then(res=>{
      console.log(res.data.response.data,'Success login')
      this.setState({
        loading:false
      },()=>userLoginAction({data:res.data.response.data.token}))
    }).catch(err=>{
      console.log(err,'err login')
      this.setState({
        loading:false
      },()=>openNotification())
    })
  };
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-8 login-page">
            <div  className='my-4' style={{marginLeft:'37%'}} >
              WCC
            </div>
            <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>


            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button loading={this.state.loading} type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
            </div>
          </div>
         
        </div>
      </React.Fragment>
    );
  }
}

const mapActionToProps = {
  userLoginAction,
};

export default connect(null, mapActionToProps)(Login);
