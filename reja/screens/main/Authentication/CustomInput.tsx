
import React from 'react'
import { Text, TextInput, StyleSheet, View } from 'react-native'
import Colors from '../../../colors/Colors'

// @ts-ignore
const CustomInput = (props) => {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props

    const hasError = errors[name] && touched[name]

    return (
        <View style={{ width: '100%' }}>
        <View style={{
            position: 'absolute',
            left: 10,
            paddingLeft: 5,
            paddingRight: 5,
            zIndex:1000,
            backgroundColor: Colors.white,
        }}><Text style={{
            fontSize: 12,
            color: '#3a3a3ab3'
        }}>{props.labelName}</Text></View>
            <TextInput
                style={[
                    styles.textInput,
                    props.multiline && { height: props.numberOfLines * 40 },
                    hasError && styles.errorInput
                ]}
                value={value}
                onChangeText={(text) => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name)
                    onBlur(name)
                }}
                {...inputProps}
            />
            {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        paddingTop: 10,
        fontSize: 13,
        padding: 5,
        height: 45,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#d7d7d7',
        borderWidth: 1,
        borderRadius: 0,
        textAlignVertical: 'top',
    },
    errorText: {
        fontSize: 10,
        color: 'red',
    },
    errorInput: {
        borderColor: 'red',
    }
})

export default CustomInput