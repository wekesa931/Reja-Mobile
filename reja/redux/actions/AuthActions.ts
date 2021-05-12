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
            
            const response = await axios.post('https://api.demo.reja.ai/auth',{
                    api_secret: "56950e817b976b1ac979e3440ddd2ab884f634f078c9b819310243dee8d83bf3",
                    app_key: "f1de47bf0353899c40ed",
                    dashboard_id: user.dashboardId,
                    email: user.email,
                    password: user.password
            })
            if(response.status === 200){
                await AsyncStorage.setItem('token', response.data.access_token);
                await AsyncStorage.setItem('clientId', JSON.stringify(response.data.user.client_id));
                dispatch({
                    type: actionTypes.LOG_IN_USER_SUCCESS
                })
            } else {
                dispatch({
                    type: actionTypes.LOG_IN_USER_FAILURE,
                    error: "Something went wrong. Contact support"
                })
            }
            
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