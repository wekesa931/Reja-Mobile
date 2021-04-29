import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Button,
} from 'react-native'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

import CustomInput from './CustomInput'
import Colors from '../../../colors/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Select from '../../../components/form/Select'


const signUpValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email is required'),
    firstName: yup
        .string()
        .required('First name is required'),
    lastName: yup
        .string()
        .required('Last name is required'),
    phoneNumber: yup
        .string()
        .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
        .required('Phone number is required'),
    sector: yup
        .string()
        .required('Sector is required'),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
})

const SignUp = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <View style={styles.signupContainer}>
                    <Text style={styles.welcome}>Sign Up</Text>

                    <Formik
                        validationSchema={signUpValidationSchema}
                        initialValues={{
                            fullName: '',
                            email: '',
                            phoneNumber: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleSubmit, isValid, values }) => (
                            <>
                                <Field
                                    component={CustomInput}
                                    name="email"
                                    labelName="Email Address"
                                    keyboardType="email-address"
                                />
                                <Field
                                    component={CustomInput}
                                    name="firstName"
                                    labelName="First Name"
                                />
                                <Field
                                    component={CustomInput}
                                    name="lastName"
                                    labelName="Last Name"
                                />
                                <Field
                                    component={CustomInput}
                                    name="phoneNumber"
                                    labelName="Phone Number"
                                    keyboardType="numeric"
                                />
                                <Field
                                    component={CustomInput}
                                    name="sector"
                                    labelName="Sector"
                                />
                                <Field
                                    component={Select}
                                    name="country"
                                    labelName="Country"
                                />
                                <Field
                                    component={CustomInput}
                                    name="password"
                                    labelName="Password"
                                    secureTextEntry
                                />
                                <Field
                                    component={CustomInput}
                                    name="confirmPassword"
                                    labelName="Confirm Password"
                                    secureTextEntry
                                />
                                <View style={{ width: '100%' }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        // @ts-ignore
                                        onPress={handleSubmit}
                                    >
                                        <Text style={{
                                            color: Colors.white,
                                            fontSize: 18
                                        }}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>


                                {/* <Button
                                    // @ts-ignore
                                    onPress={handleSubmit}
                                    title="SIGN UP"
                                    disabled={!isValid || values.email === ''}
                                /> */}
                            </>
                        )}
                    </Formik>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    signupContainer: {
        width: '90%',
        alignItems: 'center',
        // backgroundColor: 'white',
        padding: 10,
        // elevation: 10,
    },
    welcome: {
        color: Colors.primary,
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 10
    }
})

export default SignUp