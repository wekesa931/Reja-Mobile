export interface ILoginUser {
    email: string, 
    dashboardId: string, 
    password: string
}

export interface ImetricsProps {
    key?: string;
    name: string;
    icon: string;
    value: number | string;
    isMoney: boolean;
    growth: number | string;
    color: string;
    activeCard: string;
    onCardChange: (name: string) => void;
}

export const actionTypes = {
    SIGN_UP_USER: "SIGN_UP_USER",
    LOG_IN_USER_SUCCESS: "LOG_IN_USER_SUCCESS",
    LOG_IN_USER_FAILURE: "LOG_IN_USER_FAILURE",
    AUTH_START: "AUTH_START",
    LOG_IN_START: "LOG_IN_START",
    LOG_OUT_USER: "LOG_OUT_USER",
    GET_PERIOD: "GET_PERIOD",
    SET_PERIOD: "SET_PERIOD",
    GET_SPAN: "GET_SPAN",
    SET_SPAN: "SET_SPAN",
    GET_SUMMARY: "GET_SUMMARY",
    SET_SUMMARY: "SET_SUMMARY",
    GET_SUMMARY_ERROR: "GET_SUMMARY_ERROR",
    GET_REVENUE: "GET_REVENUE",
    SET_REVENUE: "SET_REVENUE",
    GET_TRANSACTION: "GET_TRANSACTION",
    SET_TRANSACTION: "SET_TRANSACTION",
}
 