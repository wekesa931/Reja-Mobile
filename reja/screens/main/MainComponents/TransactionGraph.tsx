import * as React from 'react';
import { useEffect } from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../../colors/Colors';

import SingleGraph from '../../../components/GraphContainer/SingleGraph';
import PercentageChange from '../../../components/percentageChange';
import SummaryCards from '../../../components/SummaryCards';
import SummaryCardsComponent from '../../../components/SummaryCardsComponents';
import { formatNumber } from '../../../components/utils/HelperFunctions';
import { getRevenueDetails } from '../../../redux/actions/revenueActions';
import { getTransactionDetails } from '../../../redux/actions/transactionActions';
import { RootState } from '../../../redux/reducers';
import { IRevenueData } from '../../../redux/reducers/revenueReducers';
import { ITransactionData } from '../../../redux/reducers/transactionReducers';
 
const TransactionGraph = () => {
    const dispatch = useDispatch()
    const store = useSelector((state: RootState) => state)
    const { periodReducers, transactionReducers } = store
    const { span, period } = periodReducers
    const { overview, data, isLoading } = transactionReducers

    const dates = data.map((d: ITransactionData) => d.date)
    const trans = data.map((d: ITransactionData) => d.transactions)
    const change = data.map((d: ITransactionData) => d.pct_change)

    const formatNumberHelper = (num: any): string => {
        return formatNumber(Math.abs(num))
    }

    const checkIfNegative = (num: string | number) => {
        return parseFloat(num) < 0
    }
    
    useEffect(() => {
        dispatch(getTransactionDetails(span, period))
    }, [dispatch, span, period]);
    return <>
        {isLoading 
            ? <ActivityIndicator size="large" color={Colors.primary} />
            : <>
            <SingleGraph
                labels={dates}
                revenue={trans}
                change={change}
            />
            <SummaryCards title='Transaction Summary'>
                <SummaryCardsComponent title='Total Transactions' isNegative={checkIfNegative(overview.total_transactions.toString())} value={formatNumberHelper(overview.total_transactions)} isMoney={true} />
                <SummaryCardsComponent title='Average transactons per day' isNegative={checkIfNegative(overview.avg_transactions.toString())} value={formatNumberHelper(overview.avg_transactions)} isMoney={true} />
                <PercentageChange title='Average growth rate per day' growth={overview.avg_pct_change} />
                <SummaryCardsComponent title='Average revenue per transacton per day' isNegative={checkIfNegative(overview.trans_per_customer.toString())} value={formatNumberHelper(overview.trans_per_customer)} isMoney={true} />
                <SummaryCardsComponent title='Average customers per transaction' isNegative={checkIfNegative(overview.rev_per_transaction.toString())} value={formatNumberHelper(overview.rev_per_transaction)} isMoney={true} />
            </SummaryCards>
            </>
        }
    </>
}
 
export default TransactionGraph;
