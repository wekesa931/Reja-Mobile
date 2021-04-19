import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import IntroScreens from '../../components/IntroScreens';
import { AppStrings, SCREENS } from '../../components/utils/strings/Strings';

const vecImage = require('../../assets/vectors/goals.jpg')

interface IProps {
    navigation: StackNavigationProp<any, any>
}

const ScreenThree = (props: IProps) => {
   
    return <IntroScreens
                nextPage={SCREENS.forthScreen}
                vecImage={vecImage}
                navigation={props.navigation}
                statementText={AppStrings.screenTwoExplanation}
    />
}

export default ScreenThree;