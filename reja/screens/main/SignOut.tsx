import * as React from 'react';
import { Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { LogOutUser } from '../../redux/actions/AuthActions';

interface IProps {
    navigation: StackNavigationProp<any, any>
}

const SignOut = (props: IProps) => {
    const dispatch = useDispatch();

    return <Button
        title='Log Out'
        onPress={() => dispatch(LogOutUser())}
     />
}
 
export default SignOut;