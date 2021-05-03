import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Colors from '../../colors/Colors';
import { SCREENS } from '../../components/utils/strings/Strings';
import SummaryScreen from '../../screens/main/SummaryScreen';

const Stack = createStackNavigator();

const mainScreensHeader = {
    headerTintColor: Colors.white,
    headerStyle: {
        backgroundColor: Colors.primary,
    },
}

const AppScreensNavigator = () => {
    return <Stack.Navigator>
        <Stack.Screen name={SCREENS.summaryScreen} component={SummaryScreen} options={mainScreensHeader} />
    </Stack.Navigator>
}

export default AppScreensNavigator;
