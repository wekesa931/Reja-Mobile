import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Dispatch } from "react"
import { actionTypes } from "../types"

export const getSummary = (params: any) => {
    // @ts-ignore
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: actionTypes.GET_SUMMARY })
            const token = await AsyncStorage.getItem('token')
            const clientId = await AsyncStorage.getItem('clientId')
            // @ts-ignore
            const response = await axios.get("https://api.demo.reja.ai/analytics/summary", 
            {
                params: {
                    ...params,
                    // @ts-ignore
                    client_id: JSON.parse(clientId)
                },
                headers: {'Authorization': `Bearer ${token}`}
            }
            )
            dispatch({
                type: actionTypes.SET_SUMMARY,
                data: response.data.data,
                overview: response.data.overview,
            })
        } catch(e) {
            if(e.message.includes('401')){
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
            dispatch({
                type: actionTypes.GET_SUMMARY_ERROR,
                error: e.message
            })
        }
    }
}