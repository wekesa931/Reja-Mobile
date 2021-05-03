import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Dispatch } from 'redux';
import { Services } from '../../screens/intro/WelcomeScreen';

import { actionTypes, ILoginUser } from '../types';

export const SignUpUser = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: actionTypes.AUTH_START })
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

export const LogInUser = (user: ILoginUser) => {
    return async (dispatch: Dispatch) => {
        
        try {
            dispatch({ type: actionTypes.AUTH_START })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
            console.log(response)
            await AsyncStorage.setItem(
                'token',
                'thisismytoken'
            );
            dispatch({
                type: actionTypes.LOG_IN_USER_SUCCESS
            })
        } catch (error) {
            dispatch({
                type: actionTypes.LOG_IN_USER_FAILURE,
                error: error.message
            })
        }
    }
}

export const checkUserAuthenticated = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: actionTypes.AUTH_START })
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
            dispatch({ type: actionTypes.AUTH_START })
            await AsyncStorage.removeItem('token');
            dispatch({
                type: actionTypes.LOG_OUT_USER,
            })
        } catch (error) {
            console.log(error);
        }
    }
}