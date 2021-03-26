import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../RigvTheme/Rigvtheme'
import { emailValidator } from '../Rigvhelpers/emailValidator'
import { phonenoValidator } from '../Rigvhelpers/phonenoValidator'
import { nameValidator } from '../Rigvhelpers/nameValidator'
import { otpValidator } from '../Rigvhelpers/otpValidator'

export default function RigvRegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phoneno, setPhoneno] = useState({ value: '', error: '' })
  const [otp, setOTP] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const phoneError = phonenoValidator(phoneno.value)
    const otpError = otpValidator(otp.value)

    if (emailError || phoneError || nameError ||otpError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPhoneno({ ...phoneno, error: phoneError })
      setOTP({...otp, error:otpError})
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'RigvDashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Registration</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Phone#"
        returnKeyType="done"
        keyboardType="numeric"
        value={phoneno.value}
        onChangeText={(text) => setPhoneno({ value: text, error: '' })}
        error={!!phoneno.error}
        errorText={phoneno.error}         
      />
      <TextInput
        label="OTP"
        returnKeyType="done"
        keyboardType="numeric"
        value={otp.value}
        onChangeText={(text) => setOTP({ value: text, error: '' })}
        error={!!otp.error}
        errorText={otp.error}         
      />
       
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      {/* <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RigvLoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View> */}
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
