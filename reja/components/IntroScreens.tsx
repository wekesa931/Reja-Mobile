import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, Text, View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
// import Icon from 'react-native-vector-icons/Ionicons';

import CustomHeaderButton from '../components/utils/customHeaderButton/CustomHeaderButton';
import Colors from '../colors/Colors';
import { AppStrings, SCREENS } from './utils/strings/Strings';


interface IProps {
    vecImage: string
    navigation: StackNavigationProp<any, any>
    statementText: string
    nextPage: string
}

const IntroScreens = (props: IProps) => {
    // @ts-ignore
    const SkipToLogin = ({ onPress, color }) => <Item color={color} title={AppStrings.skip} onPress={onPress} />;
    useEffect(() => {
        props.navigation.setOptions({
            // @ts-ignore
            headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <SkipToLogin color={Colors.accent} onPress={() => props.navigation.replace(SCREENS.signUp)} />
                {/* @ts-ignore */}
                <Item
                    // style={styles.nextColor}
                    color={Colors.accent}
                    title="Favorite"
                    iconName="arrow-forward-outline"
                    onPress={() => props.navigation.replace(SCREENS.signUp)}
                />
            </HeaderButtons>
        })
    });
    return <View style={styles.container}>
        {/* @ts-ignore */}
        <Image style={styles.logo} source={props.vecImage} />
        <View>
            <Text style={styles.text}>{props.statementText}</Text>
        </View>
        <View style={styles.next}>
            <Text style={{...styles.text, ...styles.nextText}}
                onPress={() => props.navigation.replace(props.nextPage)}
            >{AppStrings.next}</Text>
            <Ionicons name="chevron-forward-outline" size={30} color={Colors.accent} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: Colors.secondary
    },
    logo: {
        width: 350,
        height: 350,
        marginBottom: 30
    },
    text: {
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '900',
        fontSize: 15
    },
    next: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        marginRight: 50,
        marginTop: 50
    },
    nextText: {
        color: Colors.accent,
    }
})

export default IntroScreens;