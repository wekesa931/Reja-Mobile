import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, Text, View, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
// import Icon from 'react-native-vector-icons/Ionicons';

import CustomHeaderButton from '../components/utils/customHeaderButton/CustomHeaderButton';
import Colors from '../colors/Colors';
import { AppStrings, SCREENS } from './utils/strings/Strings';


interface IProps {
    vecImage: ImageSourcePropType
    navigation: StackNavigationProp<any, any>
    statementText: string
    nextPage: string
    screen: number
}

const IntroScreens = (props: IProps) => {
    const PageProgress = () => <View style={styles.progress}></View>;
    const loader = () => {
        let component = <></>
        if (props.screen === 1) {
            component = <>
                <PageProgress />
            </>
        } else if (props.screen === 2) {
            component = <>
                <PageProgress />
                <PageProgress />
            </>
        } else if (props.screen === 3) {
            component = <>
                <PageProgress />
                <PageProgress />
                <PageProgress />
            </>
        } else {
            component = <>
                <PageProgress />
                <PageProgress />
                <PageProgress />
                <PageProgress />
            </>
        }
        return component
    }
    // @ts-ignore
    useEffect(() => {
        props.navigation.setOptions({
            // @ts-ignore
            headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                {loader()}
            </HeaderButtons>
        })
    });
    return <View style={{ backgroundColor: Colors.white }}>
        <View style={styles.skipToNext}>
            <Text
                style={styles.skipText}
                onPress={() => props.navigation.replace(SCREENS.authOptions)}
            >{AppStrings.skip}</Text>
            <Ionicons
                name="arrow-forward-outline"
                color={Colors.accent} size={23}
                onPress={() => props.navigation.replace(SCREENS.authOptions)}
            />
        </View>
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={props.vecImage} />
            </View>
            <View style={{
                height: 170
            }}>
                <Text style={styles.text}>{props.statementText}</Text>
            </View>
            <TouchableOpacity
                style={styles.next}
                onPress={() => props.navigation.replace(props.nextPage)}
            >
                <Text style={{ ...styles.nextText }}
                    onPress={() => props.navigation.replace(props.nextPage)}
                >{AppStrings.next}</Text>
            </TouchableOpacity>
        </View>
    </View>

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 100,
        alignItems: 'center',
        height: '100%',
        width: '100%',

    },
    progress: {
        width: 80,
        marginLeft: 15,
        height: 10,
        backgroundColor: Colors.accent,
        borderRadius: 10
    },
    skipToNext: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 10
    },
    logo: {
        // flex: 1,
        width: 350,
        height: 350,
        resizeMode: 'contain',
        // marginBottom: 20
    },
    skipText: {
        fontSize: 17,
        color: Colors.accent,
        marginRight: 10
    },
    text: {
        textAlign: 'center',
        color: Colors.black,
        fontWeight: '900',
        fontSize: 16
    },
    next: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderRadius: 5,
        padding: 10,
        backgroundColor: Colors.secondary
    },
    nextText: {
        color: Colors.accent,
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default IntroScreens;


// const SkipToLogin = ({ onPress, color }) => <Item color={color} title={AppStrings.skip} onPress={onPress} />;
//     useEffect(() => {
//         props.navigation.setOptions({
//             // @ts-ignore
//             headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//                 <SkipToLogin color={Colors.accent} onPress={() => props.navigation.replace(SCREENS.signUp)} />
//                 {/* @ts-ignore */}
//                 <Item
//                     // style={styles.nextColor}
//                     color={Colors.accent}
//                     title="Favorite"
//                     iconName="arrow-forward-outline"
//                     onPress={() => props.navigation.replace(SCREENS.signUp)}
//                 />
//             </HeaderButtons>
//         })
//     });

