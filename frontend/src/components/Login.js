import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = ({onSubmitHandler}) => {
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onSubmitHandler}
        >
            <Form.Item
                name="userId"
                rules={[
                    {
                        required: true,
                        message: 'Please input your ID!',
                    },
                ]}
            >
                <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="ID" 
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <Link to="/register">register now!</Link> 
            </Form.Item>
        </Form>
    )
}

export default Login;
