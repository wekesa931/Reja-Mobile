import { actionTypes } from "../types";

interface IOverviewData{
    avg_new_transactions: string,
    avg_pct_change: string,
    avg_pct_change_new: string,
    avg_transactions: string,
    rev_per_transaction: number,
    total_new_transactions: string,
    total_transactions: string,
    trans_per_customer: string,
}

interface ITransactionsState {
    topMetrics: any,
    monthSummary: any,
    daySummary: any,
    overview: IOverviewData,
    data: ITransactionData[]
}

interface IOverviewData{
    avg_new_transactions: string,
    avg_pct_change: string,
    avg_pct_change_new: string,
    avg_transactions: string,
    rev_per_transaction: number,
    total_new_transactions: string,
    total_transactions: string,
    trans_per_customer: string,
}

export interface ITransactionData {
    date: Date,
    new_transactions: number,
    pct_change: number,
    pct_change_new: number,
    transactions: number,
    week: number,
    year: number,
}

const initialMetrics = {
    top_days: [
        {
            date: new Date(),
            day: 0,
            new_transactions: 0,
            pct_change: 0,
            pct_change_new: null,
            transactions: 0,
            year: 0,
        }
    ],
    top_weeks: [
        {
            date: new Date(),
            new_transactions: 0,
            pct_change: 0,
            pct_change_new: 0,
            transactions: 0,
            week: 0,
            year: 0,
        },
      ],
}

const initialMonthSummary = {
    monthly_recurring_trans: "0",
    monthly_trans_growth: "0",
}

const initialDaySummary = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
}

const initialOverview = {
    avg_new_transactions: "0",
    avg_pct_change: "0",
    avg_pct_change_new: "0",
    avg_transactions: "0",
    rev_per_transaction: 0,
    total_new_transactions: "0",
    total_transactions: "0",
    trans_per_customer: "0",
}
const initialData: ITransactionData[] =  [{
    date: new Date(),
    new_transactions: 0,
    pct_change: 0,
    pct_change_new: 0,
    transactions: 0,
    week: 0,
    year: 0,
}]

const initialState: ITransactionsState = {
    topMetrics: initialMetrics,
    monthSummary: initialMonthSummary,
    daySummary: initialDaySummary,
    overview: initialOverview,
    data: initialData
}

const transactionReducers = (state: ITransactionsState = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_TRANSACTION:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.SET_TRANSACTION:
            return {
                isLoading: false,
                error: null,
                data: action.data,
                overview: action.overview,
                daySummary: action.daySummary,
                monthSummary: action.monthSummary
            }
        default:
            return state
    }
}   

export default transactionReducers;