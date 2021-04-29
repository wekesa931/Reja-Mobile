import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';

export const SignIn = () => (<View>
  <Text>hahahaha</Text>
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        {/* @ts-ignore */}
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
</View>

);