import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../colors/Colors';
import { AppStrings, SCREENS } from '../../components/utils/strings/Strings';

const windowWidth = Dimensions.get('window').width;
const logo = require("../../assets/logo.png")

export interface IProps {
    navigation: StackNavigationProp<any, any>
}

const AuthOptions = (props: IProps) => {
    return <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.welcome}>{AppStrings.authWelcome}</Text>
        <View>
            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate(SCREENS.signIn)}>
                <Text style={styles.txt}>{AppStrings.logIn}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                ...styles.btn,
                backgroundColor: Colors.white,
                borderWidth: 2,
                borderColor: Colors.primary
            }}
            onPress={() => props.navigation.navigate(SCREENS.signUp)}
            >
                <Text style={{ ...styles.txt, color: Colors.primary }}>{AppStrings.signUp}</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        backgroundColor: Colors.white
    },
    logo: {
        marginTop: 50,
        marginBottom: 30,
        width: 90,
        height: 90
    },
    welcome: {
        color: Colors.primary,
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btn: {
        width: windowWidth - 50,
        marginTop: 40,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    txt: {
        color: Colors.white,
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default AuthOptions;