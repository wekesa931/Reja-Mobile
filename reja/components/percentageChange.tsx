import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/build/Feather';
import Colors from '../colors/Colors';

export interface IProps {
    growth: number;
    title: string;
}
 
const PercentageChange = (props: IProps) => {
    return <View style={styles.cards}>
                <Text>{props.title}</Text>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                        {props.growth > -1 ? 
                            <Feather name="arrow-up" size={15} color="green" />
                        : <Feather name="arrow-down" size={15} color="red" />}
                    </View>
                    <View style={{ marginRight: 3 }}>
                        <Text style={{ fontSize: 10, color: props.growth > -1 ? 'green' : 'red' }}>{props.growth}%</Text>
                    </View>
                </View>
            </View>
}
 
export default PercentageChange;

const styles = StyleSheet.create({
    cards: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 5,
        elevation: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})