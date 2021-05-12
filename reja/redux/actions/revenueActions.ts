import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Dispatch } from "react"
import { actionTypes } from "../types"

export const getRevenueDetails = (span: string, period: string) => {
    // @ts-ignore
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: actionTypes.GET_REVENUE })
            const token = await AsyncStorage.getItem('token')
            const clientId = await AsyncStorage.getItem('clientId')
            // @ts-ignore
            const response = await axios.get("https://api.demo.reja.ai/analytics/revenue/growth", 
            {
                params: {
                    span,
                    period,
                    // @ts-ignore
                    client_id: JSON.parse(clientId)
                },
                headers: {'Authorization': `Bearer ${token}`}
            }
            )
            dispatch({
                type: actionTypes.SET_REVENUE,
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
        }
    }
}