import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';import IntroScreens from '../../components/IntroScreens';
import { AppStrings, SCREENS } from '../../components/utils/strings/Strings';

const vecImage = require('../../assets/vectors/training.jpg')

interface IProps {
    navigation: StackNavigationProp<any, any>
}

const ScreenFour = (props: IProps) => {
   
    return <IntroScreens
                nextPage={SCREENS.signUp}
                vecImage={vecImage}
                navigation={props.navigation}
                statementText={AppStrings.screenFourExplanation}
    />
}

export default ScreenFour;