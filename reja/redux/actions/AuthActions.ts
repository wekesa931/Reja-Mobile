import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';

import { actionTypes } from '../types';

export const SignUpUser = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: actionTypes.SIGN_UP_USER_START })
            await AsyncStorage.setItem(
                'token',
                'thisismytoken'
            );
            const token = await AsyncStorage.getItem('token')
            dispatch({
                type: actionTypes.SIGN_UP_USER,
                token
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const checkUserAuthenticated = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: actionTypes.SIGN_UP_USER_START })
            const token = await AsyncStorage.getItem('token');
            if (token) {
                dispatch({
                    type: actionTypes.SIGN_UP_USER,
                    token
                })
            } else {
                dispatch({
                    type: actionTypes.LOG_OUT_USER,
                })
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const LogOutUser = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: actionTypes.SIGN_UP_USER_START })
            await AsyncStorage.removeItem('token');
            dispatch({
                type: actionTypes.LOG_OUT_USER,
            })
        } catch (error) {
            console.log(error);
        }
    }
}