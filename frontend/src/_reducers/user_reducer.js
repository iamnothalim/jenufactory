import {
    AUTH_USER,
    LOGIN_USER,
    REGISTER_USER,
} from "../_actions/types";

const initialState = {
    userData: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, userData: action.payload };
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload };
        case REGISTER_USER:
            return { ...state, register: action.payload };
        default:
            return state;
    }
};