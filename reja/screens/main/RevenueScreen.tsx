import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../colors/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/utils/customHeaderButton/CustomHeaderButton';

interface IProps {
    navigation: StackNavigationProp<any, any>
}

const RevenueScreen = (props: IProps) => {
    
    return <View>
        <TouchableOpacity style={styles.container}>
            <Text style={styles.headerText}>Revenue Screen</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#d9d9d9',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    headerText: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 18
    },
    nextText: {
        color: Colors.white,
    }
})

export default RevenueScreen;