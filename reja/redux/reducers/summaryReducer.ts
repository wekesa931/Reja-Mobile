import { actionTypes } from "../types";

interface IChange {
    customer: string,
    expense: number,
    profit: number,
    revenue: number,
    transactions: string,
}
interface IData {
    customers: number,
    date: Date,
    expense: number,
    profit: number,
    revenue: number,
    transactions: number,
    week: number,
    year: number,
}
export interface IOverview {
    change: IChange ,
    total_customers: string,
    total_expense: number,
    total_profit: number,
    total_revenue: number,
    total_transactions: string,
}

interface ISummaryDetails {
    error: any,
    data: IData[],
    overview: IOverview,
    isLoading: boolean,
}

const initialData = [
    {
        customers: 0,
        date: new Date(),
        expense: 0,
        profit: 0,
        revenue: 0,
        transactions: 0,
        week: 0,
        year: 0,
    }
]
const initialCahnge = {
    customer: "0",
    expense: 0,
    profit: 0,
    revenue: 0,
    transactions: "0",
}
const initialOverview = {
    change: initialCahnge ,
    total_customers: "0",
    total_expense: 0,
    total_profit: 0,
    total_revenue: 0,
    total_transactions: '0',
}

const initialState: ISummaryDetails = {
    error: null,
    data: initialData,
    overview: initialOverview,
    isLoading: true
}

const summaryReducers = (state: ISummaryDetails = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_SUMMARY:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.SET_SUMMARY:
            return {
                isLoading: false,
                error: null,
                data: action.data,
                overview: action.overview
            }

        case actionTypes.GET_SUMMARY_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return state
    }
}   

export default summaryReducers;