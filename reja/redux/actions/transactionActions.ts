import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Dispatch } from "react"
import { actionTypes } from "../types"

export const getTransactionDetails = (span: string, period: string) => {
    // @ts-ignore
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: actionTypes.GET_TRANSACTION })
            const token = await AsyncStorage.getItem('token')
            const clientId = await AsyncStorage.getItem('clientId')
            // @ts-ignore
            const response = await axios.get("https://api.demo.reja.ai/analytics/transaction/growth", 
            {
                params: {
                    span,
                    period,
                    // @ts-ignore
                    client_id: JSON.parse(clientId)
                },
                headers: {'Authorization': `Bearer ${token}`}
            })
            dispatch({
                type: actionTypes.SET_TRANSACTION,
                data: response.data.data,
                overview: response.data.overview,
                daySummary: response.data.day_summary,
                monthSummary: response.data.monthly_summary,
                topMetrics: response.data.top_metrics,
            })
        } catch(e) {
            console.log("====>", e)
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