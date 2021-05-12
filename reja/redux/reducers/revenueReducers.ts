import { actionTypes } from "../types";

export interface IRevenueData {
    date: Date,
    new_revenue: number,
    pct_change: number,
    pct_change_new: number,
    revenue: number,
    week: number,
    year: number,
}

interface IOverview {
    avg_new_revenue: string,
    avg_pct_change: string,
    avg_pct_change_new: string,
    avg_revenue: string,
    rev_per_customer: number,
    rev_per_transaction: number,
    total_new_revenue: number,
    total_revenue: number,
}

interface IRevenueState {
    error: null;
    data: IRevenueData[];
    overview: IOverview;
    isLoading: boolean
}

const initialData: IRevenueData[] = [{
    date: new Date(),
    new_revenue: 0,
    pct_change: 0,
    pct_change_new: 0,
    revenue: 0,
    week: 0,
    year: 0,
}]

const initialOverView: IOverview = {
    avg_new_revenue: "0",
    avg_pct_change: "0",
    avg_pct_change_new: "0",
    avg_revenue: "0",
    rev_per_customer: 0,
    rev_per_transaction: 0,
    total_new_revenue: 0,
    total_revenue: 0,
}

const initialState: IRevenueState = {
    error: null,
    data: initialData,
    overview: initialOverView,
    isLoading: true
}

const revenueReducers = (state: IRevenueState = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_REVENUE:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.SET_REVENUE:
            return {
                isLoading: false,
                error: null,
                data: action.data,
                overview: action.overview
            }
        default:
            return state
    }
}   

export default revenueReducers;