export interface ILoginUser {
    email: string, 
    dashboardId: string, 
    password: string
}

export interface ImetricsProps {
    key?: string;
    name: string;
    icon: string;
    value: number;
    isMoney: boolean;
    growth: number;
    color: string;
}

export const actionTypes = {
    SIGN_UP_USER: "SIGN_UP_USER",
    LOG_IN_USER_SUCCESS: "LOG_IN_USER_SUCCESS",
    LOG_IN_USER_FAILURE: "LOG_IN_USER_FAILURE",
    AUTH_START: "AUTH_START",
    LOG_IN_START: "LOG_IN_START",
    LOG_OUT_USER: "LOG_OUT_USER",
}
 