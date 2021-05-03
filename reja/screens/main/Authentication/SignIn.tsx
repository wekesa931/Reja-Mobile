import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native'
import { Formik, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import CustomInput from './CustomInput'
import Colors from '../../../colors/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppStrings } from '../../../components/utils/strings/Strings'
import { RootState } from '../../../redux'
import { LogInUser } from '../../../redux/actions/AuthActions'
import LoaderScreen from '../../intro/LoaderScreen'

const SignIn = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state)
  const { authReducers } = store
  const { isLoading, error } = authReducers

    return (
        <>{ isLoading ? <LoaderScreen /> : (
        <><StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <View style={styles.signupContainer}>
                    <Text style={styles.welcome}>{AppStrings.logIn}</Text>
                    {error && <Text style={styles.error}>{error}!</Text>}
                    <Formik
                        initialValues={{
                            email: '',
                            dashboardId: '',
                            password: ''
                        }}
                        // @ts-ignore
                        onSubmit={values => dispatch(LogInUser(values))}
                    >
                        {({ handleSubmit, isValid, values }) => (
                            <>
                                <Field
                                    component={CustomInput}
                                    name="email"
                                    labelName="Email"
                                    keyboardType="email-address"
                                />
                                <Field
                                    component={CustomInput}
                                    name="dashboardId"
                                    labelName="Dashboard"
                                />
                                <Field
                                    component={CustomInput}
                                    name="password"
                                    labelName="Password"
                                    secureTextEntry
                                />
                                <View style={{ width: '100%' }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        // @ts-ignore
                                        onPress={handleSubmit}
                                    >
                                        <Text style={styles.logintext}>Log In</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.authOptions}>
                                  <Text>{AppStrings.dontHaveNaAccount}</Text>
                                  <Text style={styles.signupText}>{AppStrings.signUp}</Text>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
            </SafeAreaView></>
        )
            }
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
    authOptions: { 
      width: '100%', 
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10 
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
        textAlign: 'center',
        marginBottom: 40
    },
    button: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 10
    },
    signupText: {
      color: Colors.accent,
      marginLeft: 5
    },
    logintext: {
      color: Colors.white,
      fontSize: 18
  },
  error: {
    color: 'red',
    fontSize: 12
  }
})

export default SignIn