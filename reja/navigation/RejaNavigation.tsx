import React, { useState, useEffect } from 'react';
import { createStackNavigator, HeaderTitle, StackNavigationOptions } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons'
import RejaIconScreen from '../screens/intro/WelcomeScreen';
import ScreenOne from '../screens/intro/ScreenOne';
import Colors from '../colors/Colors';
import SignUpPage from '../screens/main/SignUpScreen';
import { AppStrings, SCREENS } from '../components/utils/strings/Strings';
import ScreenTwo from '../screens/intro/ScreenTwo';
import ScreenThree from '../screens/intro/ScreenThree';
import ScreenFour from '../screens/intro/ScreenFour';
import SummaryScreen from '../screens/main/SummaryScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RevenueScreen from '../screens/main/RevenueScreen';
import TransactionScreen from '../screens/main/TransactionScreen';
import SummaryNavigator from './AppScreens/MaterialTabsNavigator';
import { checkUserAuthenticated } from '../redux/actions/AuthActions';
import { RootState } from '../redux';
import LoaderScreen from '../screens/intro/LoaderScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/utils/customHeaderButton/CustomHeaderButton';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const commonHeaderStyles = {
    headerTitle: null,
    headerTransparent: true,
} as unknown as StackNavigationOptions
const introHeaders = {
    headerTitle: null,
    headerStyle: {
        backgroundColor: Colors.secondary,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        shadowColor: 'transparent',
        elevation: 0
    },
    shadowRadius: 0,
    shadowOffset: {
        height: 0,
    },
    shadowColor: 'transparent'
} as unknown as StackNavigationOptions

const mainScreensHeader = {
    headerTintColor: Colors.white,
    headerStyle: {
        backgroundColor: Colors.secondary,
    },
}

const InitialNavigation = () => {
    const dispatch = useDispatch();

    const store = useSelector((state: RootState) => state)

    const { authReducers } = store
    const { isAuthenticated, isLoading } = authReducers

    useEffect(() => {
        dispatch(checkUserAuthenticated())
    }, []);

    return <>{
        isLoading ?
            <LoaderScreen />
            : <NavigationContainer>
                {!isAuthenticated ? <Stack.Navigator>
                    <Stack.Screen name={SCREENS.welcome} component={RejaIconScreen} options={commonHeaderStyles} />
                    <Stack.Screen name={SCREENS.firstScreen} component={ScreenOne} options={introHeaders} />
                    <Stack.Screen name={SCREENS.secondScreen} component={ScreenTwo} options={introHeaders} />
                    <Stack.Screen name={SCREENS.thirdScreen} component={ScreenThree} options={introHeaders} />
                    <Stack.Screen name={SCREENS.forthScreen} component={ScreenFour} options={introHeaders} />
                    <Stack.Screen name={SCREENS.signUp} component={SignUpPage} options={commonHeaderStyles} />
                </Stack.Navigator> :
                    <Drawer.Navigator
                        initialRouteName={AppStrings.welcome}
                        drawerContentOptions={{
                            activeTintColor: Colors.primary
                        }}
                        screenOptions={{
                            headerShown: true,
                            ...mainScreensHeader,
                            headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                                <Item
                                    color={Colors.white}
                                    title="Menu"
                                    iconName="person-outline"
                                    onPress={() => {

                                    }}
                                />
                            </HeaderButtons>
                        }} >
                        <Drawer.Screen name={AppStrings.summary} component={SummaryNavigator} options={{
                            drawerIcon: () => <Ionicons name="md-trending-up" style={{ fontSize: 24 }} />
                        }} />
                        <Drawer.Screen name={AppStrings.revenues} component={RevenueScreen} options={{
                            drawerIcon: () => <Ionicons name="cash-outline" style={{ fontSize: 24 }} />
                        }} />
                        <Drawer.Screen name={AppStrings.transactions} component={TransactionScreen} options={{
                            drawerIcon: () => <Ionicons name="md-trending-up" style={{ fontSize: 24 }} />
                        }} />
                    </Drawer.Navigator>
                }
            </NavigationContainer>
    }</>
}

export default InitialNavigation;