import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from '../components/Register';
import { registerUser } from '../_actions/user_action';

const RegisterContainer = (props) => {
    const dispatch = useDispatch();
    const onSubmitHandler = (values) => {
        let body = {
            userId: values.userId,
            password: values.password,
        };
        dispatch(registerUser(body)).then((response) => {
            if (response.payload.success) {
                alert(response.payload.msg);
                props.history.push("/login");
            } else {
                alert(response.payload.msg);
            }
        });
    };
    return (
        <Register onSubmitHandler={onSubmitHandler} />
    )
};

export default withRouter(RegisterContainer);
