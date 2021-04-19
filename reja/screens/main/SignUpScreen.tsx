// import { StackNavigationProp } from '@react-navigation/stack';
// import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Text, View, Button } from 'react-native'

// interface IProps {
//     navigation: StackNavigationProp<any, any>
// }

// const SignUpPage = (props: IProps) => {
//     const storeToken = async () => {
//         try {
//             await AsyncStorage.setItem(
//                 'token',
//                 'thisismytoken'
//               );
//             props.navigation.replace('SummaryScreen')           
//         } catch (error){
//             console.log(error);
//         }
//     }
//     return <View style={{
//         flexDirection: 'column'
//     }}>
//         <View style={{
//             // flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center'
//         }}>
//             <Text>sign up page</Text>
//         </View>
//         <Text></Text>
//         <View style={{
//             // flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center'
//         }}>
//             <Button title='Go to Home Page' onPress={() => storeToken()} />
//         </View>
//     </View>
// }

// export default SignUpPage;

import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
// import Icon from 'react-native-vector-icons/Ionicons';
import { Text, ImageBackground, StyleSheet, View, TextInput, Button } from 'react-native';
import Colors from '../../colors/Colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { SignUpUser } from '../../redux/actions/AuthActions';


const MobileImage = require('../../assets/mobidash.png')

interface IProps {
    navigation: StackNavigationProp<any, any>
}


const SignUpPage = (props: IProps) => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    
    return (
        <ImageBackground source={MobileImage} style={styles.image}>

            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 200
                    }}>
                        <Ionicons name="person-circle-outline" size={35} color={Colors.accent} />
                        <Text style={styles.formLabel}> Login</Text>
                    </View>
                    <View>
                        <Text>Email</Text>
                        <TextInput style={styles.inputStyle} />
                        <Text>Dashboard Id</Text>
                        <TextInput style={styles.inputStyle} />
                        <Text>Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.inputStyle}
                        />
                        <Button color={Colors.primary} title='Sign In' onPress={() => dispatch(SignUpUser())} />
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    formContainer: {
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        width: '90%',
        backgroundColor: Colors.white,
    },
    formLabel: {
        fontSize: 25,
        color: Colors.accent,
    },
    inputStyle: {
        marginTop: 20,
        marginBottom: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#d7d7d7',
        backgroundColor: Colors.white,
    },
    formText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default SignUpPage;