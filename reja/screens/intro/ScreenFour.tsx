import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';import IntroScreens from '../../components/IntroScreens';
import { AppStrings, SCREENS } from '../../components/utils/strings/Strings';

const vecImage = require('../../assets/vectors/communication.jpg')

interface IProps {
    navigation: StackNavigationProp<any, any>
}

const ScreenFour = (props: IProps) => {
   
    return <IntroScreens
                nextPage={SCREENS.authOptions}
                vecImage={vecImage}
                navigation={props.navigation}
                statementText={AppStrings.screenFourExplanation}
                screen={4}
    />
}

export default ScreenFour;