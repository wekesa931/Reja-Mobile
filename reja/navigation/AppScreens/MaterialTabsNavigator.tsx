import React from 'react';
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
// import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../colors/Colors';
import SummaryScreen from '../../screens/main/SummaryScreen';
import SignOut from '../../screens/main/SignOut';
import UploadScreen from '../../screens/main/Upload';

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const SummaryNavigator = () => {
    return (
            <Tab.Navigator
                shifting={true}
                activeColor={Colors.white}
                inactiveColor={Colors.accent}>
                <Tab.Screen name="Summary" component={SummaryScreen} options={{
                    tabBarIcon: () => <Ionicons name="md-trending-up" color={Colors.white} size={23} />,
                    tabBarColor: Colors.primary
                }} />
                <Tab.Screen name="Upload" component={UploadScreen} options={{
                    tabBarIcon: () => <Ionicons name="cloud-upload-outline" color={Colors.white} size={23} />,
                    tabBarColor: Colors.secondary
                }} />
                <Tab.Screen name="Log Out" component={SignOut} options={{
                    tabBarIcon: () => <Ionicons name="log-out-outline" color={Colors.white} size={23} />,
                    tabBarColor: Colors.accent
                }} />
            </Tab.Navigator>
    );
}
export default SummaryNavigator