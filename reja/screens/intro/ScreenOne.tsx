import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';import IntroScreens from '../../components/IntroScreens';
import { AppStrings, SCREENS } from '../../components/utils/strings/Strings';

const vecImage = require('../../assets/vectors/meditation.jpg')

interface IProps {
    navigation: StackNavigationProp<any, any>
}

const ScreenOne = (props: IProps) => {
   
    return <IntroScreens
                nextPage={SCREENS.secondScreen}
                vecImage={vecImage}
                navigation={props.navigation}
                statementText={AppStrings.screenOneExplanation}
    />
}

export default ScreenOne;