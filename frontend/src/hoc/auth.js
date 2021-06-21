import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {auth} from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null){
    function AuthenticationCheck(props){
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(auth()).then((response)=>{
                console.log("auth안 데이터",response);

                //login 하지 않은 상태
                // if(!response.payload.id){
                //     if(option){
                //         console.log("바부똥꼬야!");
                //         props.history.push()
                //     }
                // }
            });
        },[]);

        return <SpecificComponent/>;
    }
    return AuthenticationCheck;
}