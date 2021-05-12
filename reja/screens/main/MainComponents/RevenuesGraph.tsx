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
import { RootState } from '../../../redux/reducers';
import { IRevenueData } from '../../../redux/reducers/revenueReducers';
 
const RevenueGraph = () => {
    const dispatch = useDispatch()
    const store = useSelector((state: RootState) => state)
    const { periodReducers, revenueReducers } = store
    const { span, period } = periodReducers
    const { overview, data, isLoading } = revenueReducers

    const dates = data.map((d: IRevenueData) => d.date)
    const revenue = data.map((d: IRevenueData) => d.revenue)
    const change = data.map((d: IRevenueData) => d.pct_change)

    const formatNumberHelper = (num: any): string => {
        return formatNumber(Math.abs(num))
    }
    
    useEffect(() => {
        dispatch(getRevenueDetails(span, period))
    }, [dispatch, span, period]);
    return <>
        {isLoading 
            ? <ActivityIndicator size="large" color={Colors.primary} />
            : <><SingleGraph
                labels={dates}
                revenue={revenue}
                change={change}
            />
            <SummaryCards title='Revenue Growth'>
                <SummaryCardsComponent title='Revenue Generated' isNegative={overview.total_revenue < 0} value={formatNumberHelper(overview.total_revenue)} isMoney={true} />
                <SummaryCardsComponent title='Average revenue per day' isNegative={overview.avg_revenue < 0} value={formatNumberHelper(overview.avg_revenue)} isMoney={true} />
                <SummaryCardsComponent title='Average growth rate per day' isNegative={overview.avg_pct_change < 0} value={overview.avg_pct_change} isMoney={false} />
                <PercentageChange title='Average growth rate per day' growth={overview.avg_pct_change} />
                <SummaryCardsComponent title='Average revenue per customer per day' isNegative={overview.rev_per_customer < 0} value={formatNumberHelper(overview.rev_per_customer)} isMoney={true} />
                <SummaryCardsComponent title='Average revenue per transaction per day' isNegative={overview.rev_per_transaction < 0} value={formatNumberHelper(overview.rev_per_transaction)} isMoney={true} />
            </SummaryCards>
            </>
        }
    </>
}
 
export default RevenueGraph;
