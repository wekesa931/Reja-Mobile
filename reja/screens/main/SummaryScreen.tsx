import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'

import { getSummary } from '../../redux/actions/summaryPage'
import Colors from '../../colors/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/customHeaderButton/CustomHeaderButton';
import GraphContainer from '../../components/GraphContainer/GraphContainer';
import { ImetricsProps } from '../../redux/types';
import MetricCards from '../../components/MetricCards';
import { AppStrings } from '../../components/utils/strings/Strings';
import DatePicker from '../../components/DatePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '../../redux'
import SummaryGraph from './MainComponents/Summary';
import { mappedData } from '../../components/AllMetrics';
import { activeBackColor, activeIconColor, activeTextColor } from '../../components/utils/HelperFunctions';
import RevenueGraph from './MainComponents/RevenuesGraph';
import TransactionGraph from './MainComponents/TransactionGraph';
import CustomerGraph from './MainComponents/CustomerGraph';
import ExpenseGraph from './MainComponents/ExpenseGraph';
import ProfitGraph from './MainComponents/ProfitGraph';

interface IProps {
    navigation: StackNavigationProp<any, any>
}

const SummaryScreen = (props: IProps) => {
    const [activeCard, setactiveCard] = useState('summary');
    const store = useSelector((state: RootState) => state)
    const { periodReducers, summaryReducers } = store
    const { span, period } = periodReducers
    const { overview, isLoading, error } = summaryReducers
    const dispatch = useDispatch();

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    color={Colors.white}
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        // @ts-ignore
                        props.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        })
    });

    useEffect(() => {
        const params= {
            span: span,
            period: period
        }
        dispatch(getSummary(params))
    }, [span,period]);
    const graphToDisplay = () => {
        if (activeCard === "summary"){
            return <SummaryGraph />
        } else if (activeCard === "Revenues") {
            return <RevenueGraph />
        } else if (activeCard === "Transactions") {
            return <TransactionGraph />
        } else if (activeCard === "Customers") {
            return <CustomerGraph />
        } else if (activeCard === "Expense") {
            return <ExpenseGraph />
        } else if (activeCard === "Profit") {
            return <ProfitGraph />
        }
    }
    return <ScrollView>
        {
            isLoading ?
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
            : 
                <>
                <View style={styles.cardsContainer}>
                    <TouchableOpacity style={{...styles.card, 
                        backgroundColor: activeBackColor(activeCard,Colors.primary,"summary"),
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center' }}
                        activeOpacity={.7}
                        onPress={() => setactiveCard("summary")}
                        >
                        <Text style={{
                            color: activeTextColor(activeCard,"summary"),
                            fontSize: 12
                        }}>{AppStrings.summary}</Text>
                        <MaterialIcons style={{ marginTop: 20 }} name="insert-chart-outlined" size={54} color={activeIconColor(activeCard,Colors.primary, "summary")} />
                    </TouchableOpacity>
                    {mappedData(overview).map(item => <View style={{ ...styles.card }} key={item.name}>
                        <MetricCards
                            activeCard={activeCard}
                            name={item.name}
                            icon={item.icon}
                            value={item.value}
                            isMoney={item.isMoney}
                            growth={item.growth}
                            color={item.color}
                            onCardChange={(name: string) => setactiveCard(name)}
                        />
                        </View>)}
                        </View>
                        <View>
                            <View style={styles.graphHeader}>
                                <DatePicker />
                                <Text style={styles.graphTitle}>Your Businass at a glance.</Text>
                            </View>
                            {graphToDisplay()}
                        </View>
                </>
        }
        
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 200,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#00000000',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    headerText: {
        color: Colors.accent,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'right',
        // margin: 20,
    },
    nextText: {
        color: Colors.white,
    },
    rightAlign: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500
    },
    graphContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    graphHeader: {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    graphTitle: {
        marginTop: 6,
        fontSize: 18,
        fontWeight: "600"
    },
    periodPicker: {
        justifyContent: 'center',
        width: 250,
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    card: {
        width: '30%',
        height: 100,
        // borderRadius: 60,
        marginTop: 20,
        marginRight: 5,
        marginLeft: 5,
        // borderWidth: 1,
        // borderColor: Colors.primary
    }
})

export default SummaryScreen;