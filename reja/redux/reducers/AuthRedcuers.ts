import { actionTypes } from "../types";

interface IAuthenticated {
    error: any,
    isAuthenticated: boolean
    token: string
    isLoading: boolean
}

const initialState: IAuthenticated = {
    error: null,
    isAuthenticated: false,
    // @ts-ignore
    token: null,
    isLoading: true

}

const authReducers = (state: IAuthenticated = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case actionTypes.LOG_IN_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case actionTypes.LOG_IN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                isAuthenticated: true,
            }
        case actionTypes.SIGN_UP_USER:
            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                isLoading: false
            }
        case actionTypes.LOG_OUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                isLoading: false
            }
        default:
            return state
    }
}

export default authReducers;