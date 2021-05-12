import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ImetricsProps } from '../redux/types';
import { activeBackColor, activeIconColor, activeTextColor, formatNumber } from './utils/HelperFunctions';
import Colors from '../colors/Colors';

const MetricCards = (props: ImetricsProps) => {
    
    return <TouchableOpacity
                style={{
                    flex: 1,
                    elevation: 2,
                    borderRadius: 3,
                    backgroundColor: activeBackColor(props.activeCard,props.color,props.name)
                }}
                activeOpacity={.7}
                onPress={() => props.onCardChange(props.name)}
                >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 2 }}>
                    {/* @ts-ignore */}
                    <MaterialIcons name={`${props.icon}`} size={23} color={activeIconColor(props.activeCard,props.color, props.name )} />
                </View>
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
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 12, color: activeTextColor(props.activeCard,props.name), }}>{props.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {/* @ts-ignore */}
               <Text style={{ fontWeight: 'bold', color: activeTextColor(props.activeCard,props.name) }}>{props.isMoney && 'sh'} {props.value < 0 && '-'}{formatNumber(Math.abs(props.value))}</Text>
            </View>
        </TouchableOpacity>
}

export default MetricCards

const styles = StyleSheet.create({
    card: {
        width: '30%',
        height: 100,
        borderRadius: 6,
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        borderWidth: 1,
        // borderColor: Colors.primary
    }
})
