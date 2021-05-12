import * as React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import GraphContainer from '../../../components/GraphContainer/GraphContainer';
import { RootState } from '../../../redux/reducers';

interface ISummaryData {
    customers: number,
    date: string,
    expense: number,
    profit: number,
    revenue: number,
    transactions: number,
    week: number,
    year: number,
}
 
const SummaryGraph = () => {
    const store = useSelector((state: RootState) => state)
    const { summaryReducers } = store
    const { data } = summaryReducers

    const dates = data.map((d: ISummaryData) => d.date)
    const allCustomers = data.map((d: ISummaryData) => d.customers)
    const allRevenue = data.map((d: ISummaryData) => d.revenue)
    const allTransactions = data.map((d: ISummaryData) => d.transactions)
    const allProfit = data.map((d: ISummaryData) => d.profit)
    const allExpense = data.map((d: ISummaryData) => d.expense)

    return <>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <GraphContainer
                labels={dates}
                customers={allCustomers}
                expense={allExpense}
                profit={allProfit}
                revenue={allRevenue}
                transaction={allTransactions}
                />
        </View>
    </>
}
 
export default SummaryGraph;