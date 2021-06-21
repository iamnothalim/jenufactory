import { AUTH_USER, REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./types";
import axios from "axios";

export function auth(){
    const request = axios
        .get("/api/auth/check")
        .then((response)=>response.data);

    return {
        type: AUTH_USER,
        payload: request,
    };
};

export function registerUser(data){
    console.log("회원가입 데이터 들어갑니다 슝!",data);
    const request = axios
        .post("/api/auth/register",data)
        .then((response)=>response.data);
    
    return {
        type: REGISTER_USER,
        payload: request,
    };
};

export function loginUser(data) {
    const request = axios
        .post("/api/auth/login", data)
        .then((response) => response.data);
    console.log("로그인 페이로드", request);
    return {
        type: LOGIN_USER,
        payload: request,
    };
};

export function logoutUser(){
    const request = axios
        .get("/api/auth/logout")
        .then((response)=>response.data);
    return{
        type: LOGIN_USER,
        payload: request,
    };
};