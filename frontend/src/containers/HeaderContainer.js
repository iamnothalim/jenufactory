import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { logoutUser } from '../_actions/user_action';

const HeaderContainer = (props) => {
    const dispatch = useDispatch();
    const userInfo =useSelector((state)=>({
        data: state.user.userData
    }));
    //console.log('sssss',userInfo[0]);
    const onLogout = ()=>{
        dispatch(logoutUser()).then((response) => {
            if (!response.payload.loginSuccess) {
                props.history.push("/login");
            } else {
                alert("로그아웃 하는데 실패 했습니다.");
            }
        });
    };
    return (
        <Header userInfo={userInfo.data[0]} onLogout={onLogout} />
    )
}

export default withRouter(HeaderContainer);
