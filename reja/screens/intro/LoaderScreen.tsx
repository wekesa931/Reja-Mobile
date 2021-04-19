import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native'

const logo = require("../../assets/logo.png")

const LoaderScreen = () => {
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
 
export default LoaderScreen;



