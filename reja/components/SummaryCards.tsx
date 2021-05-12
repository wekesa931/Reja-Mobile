import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../colors/Colors';

export interface SummaryCardsProps {
    
}
 
const SummaryCards = (props: any) => {
    return <View style={{ marginHorizontal: 5}}>
                <View style={styles.titleContainer}><Text style={styles.title}>{props.title}</Text></View>
                {props.children}
            </View>
}
 
export default SummaryCards;

const styles = StyleSheet.create({
    cards: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        paddingVertical: 15,
        paddingHorizontal: 5,
        marginBottom: 5,
        elevation: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    }, 
    title: {
        marginTop: 6,
        marginBottom: 6,
        fontSize: 18,
        fontWeight: "600"
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})