import React from 'react';
import { useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';
import Login from '../components/Login';
import { loginUser } from '../_actions/user_action';

const LoginContainer = (props) => {
    const dispatch = useDispatch();
    const onSubmitHandler = (values) => {
        let body = {
            userId: values.userId,
            password: values.password,
        };
        console.log("요거시 로그인이다", body);
        dispatch(loginUser(body)).then((response) => {
            if (response.payload.loginSuccess) {
                props.history.push("/");
            } else {
                alert(response.payload.msg);
            }
        });
    };
    return (
        <Login onSubmitHandler={onSubmitHandler}/>
    )
}

export default withRouter(LoginContainer);
