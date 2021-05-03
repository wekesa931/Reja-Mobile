import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../colors/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/customHeaderButton/CustomHeaderButton';
import GraphContainer from '../../components/GraphContainer/GraphContainer';
import { ImetricsProps } from '../../redux/types';
import MetricCards from '../../components/MetricCards';
import { AppStrings } from '../../components/utils/strings/Strings';
import DatePicker from '../../components/DatePicker';

interface IProps {
    navigation: StackNavigationProp<any, any>
}
const fakeData: ImetricsProps[] = [
    {
        name: 'Revenues',
        icon: 'money',
        value: 1234,
        isMoney: true,
        growth: 1.23,
        color: Colors.accent
    },{
        name: 'Transactions',
        icon: 'account-tree',
        value: 234,
        isMoney: false,
        growth: 23,
        color: Colors.primary
    },{
        name: 'Customers',
        icon: 'groups',
        value: 234,
        isMoney: false,
        growth: 5,
        color: Colors.secondary
    },{
        name: 'Expense',
        icon: 'account-balance',
        value: 12234,
        isMoney: true,
        growth: -10,
        color: Colors.tertiary
    },{
        name: 'Profit',
        icon: 'attach-money',
        value: 1672234,
        isMoney: true,
        growth: -10,
        color: Colors.accent
    }
]

const SummaryScreen = (props: IProps) => {
    const [open, setopen] = useState(false);
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
    
    return <ScrollView>
        <View style={styles.cardsContainer}>
            <TouchableOpacity style={{...styles.card, 
                backgroundColor: Colors.primary,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center' }}>
                <Text style={{
                    color: Colors.white,
                    fontSize: 12
                }}>{AppStrings.summary}</Text>
                <MaterialIcons style={{ marginTop: 20 }} name="insert-chart-outlined" size={54} color={Colors.white} />
            </TouchableOpacity>
            {fakeData.map(item => <TouchableOpacity style={{ ...styles.card, borderColor: item.color }} key={item.name}>
                <MetricCards
                    name={item.name}
                    icon={item.icon}
                    value={item.value}
                    isMoney={item.isMoney}
                    growth={item.growth}
                    color={item.color}
                />
                </TouchableOpacity>)}
        </View>
        <View>
            <View style={styles.graphHeader}>
                <DatePicker />
                {/* <TouchableOpacity style={styles.periodPicker} onPress={() => setopen(!open)}>
                    <Text style={{ color: Colors.white }}>Last 30 Days - Weekly Analysis</Text>
                </TouchableOpacity> */}
                <Text style={styles.graphTitle}>Your Businass at a glance.</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <GraphContainer />
            </View>
            
        </View>
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
        borderRadius: 6,
        marginTop: 20,
        marginRight: 5,
        marginLeft: 5,
        borderWidth: 1,
        // borderColor: Colors.primary
    }
})

export default SummaryScreen;