import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';

const LoginPage = () => {
    return (
        <div>
            <h3>로그인</h3>
            <LoginContainer/>
        </div>
    )
}

export default withRouter(LoginPage);
