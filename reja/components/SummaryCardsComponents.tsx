import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../colors/Colors';

export interface IProps {
    title: string;
    value: number | string;
    isMoney: boolean;
    isNegative: boolean;
}
 
const SummaryCardsComponent = (props: IProps) => {
    return <View style={styles.cards}>
                <Text>{props.title}</Text>
                <Text>{props.isMoney && 'sh'} {props.isNegative && '-'} {props.value}</Text>
            </View>
}
 
export default SummaryCardsComponent;

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
    }
})