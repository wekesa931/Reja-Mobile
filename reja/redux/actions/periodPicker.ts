import { Dispatch } from 'redux';

import { actionTypes } from '../types';

export const setPeriod = (period: string, span: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: actionTypes.SET_PERIOD,
            period,
            span
        })
    }
}