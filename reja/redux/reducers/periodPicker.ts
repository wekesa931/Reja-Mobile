import { actionTypes } from "../types";

interface PeriodCheck {
    error: any,
    span: string,
    period: string
}

const initialState: PeriodCheck = {
    error: null,
    span: "30days",
    period: "weekly"

}

const periodReducers = (state: PeriodCheck = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_PERIOD:
            return {
                ...state,
                period: action.period,
                span: action.span
            }
        default:
            return state
    }
}

export default periodReducers;