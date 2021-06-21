import React from 'react';
import { withRouter } from 'react-router-dom';
import RegisterContainer from '../containers/RegisterContainer';

const RegisterPage = () => {
    return (
        <div>
            <h3>회원가입</h3>
            <RegisterContainer/>
        </div>
    )
}

export default withRouter(RegisterPage);
