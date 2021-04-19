import React, { useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, Text, View, StyleSheet } from 'react-native'
import ScreenOne from './ScreenOne';
import { SCREENS } from '../../components/utils/strings/Strings';

const logo = require("../../assets/logo.png")

interface IProps {
    navigation: StackNavigationProp<any, any>
}

class Services {
    static load(callBack: (l: any) => void){
        setTimeout(callBack, 5000);
    }
}
 
const RejaIconScreen = (props: IProps) => {
    const [loaded, setloaded] = useState(false);
    
    useEffect(() => {
        Services.load(l => setloaded(true))
    }, []);

    useEffect(() => {
        if(loaded){
            props.navigation.replace(SCREENS.firstScreen)
        }
    }, [loaded]);

    return <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
    </View>
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
        width: 150,
        height: 150
    }
})
 
export default RejaIconScreen;



