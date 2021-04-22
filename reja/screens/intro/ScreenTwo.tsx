import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';import IntroScreens from '../../components/IntroScreens';
import { AppStrings, SCREENS } from '../../components/utils/strings/Strings';

const vecImage = require('../../assets/vectors/coaching.jpg')

interface IProps {
    navigation: StackNavigationProp<any, any>
}

const ScreenTwo = (props: IProps) => {
   
    return <IntroScreens
                nextPage={SCREENS.thirdScreen}
                vecImage={vecImage}
                navigation={props.navigation}
                statementText={AppStrings.screenTwoExplanation}
                screen={2}
    />
}

export default ScreenTwo;