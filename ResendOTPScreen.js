import React, { useState } from 'react'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../Rigvhelpers/emailValidator'
import { phonenoValidator } from '../Rigvhelpers/phonenoValidator'

export default function ResendOTPScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phoneno, setPhoneno] = useState({ value: '', error: '' })

  const sendOTP = () => {
    // const emailError = emailValidator(email.value)
    // if (emailError) {
    //   setEmail({ ...email, error: emailError })
    //   return
    // }
    let emailError =null
    let phoneError = null
    if(email.value!=null){
      if(email.value==''){
        if(phoneno.value!=null){
          phoneError = phonenoValidator(phoneno.value)      
          if(phoneError){        
            setPhoneno({ ...phoneno, error: phoneError })
            return
          }     
        }
      }
      else{
        emailError = emailValidator(email.value)
        if(emailError){        
          setEmail({ ...email, error: emailError })
          return
        }    
      }  
    }
    navigation.navigate('RigvOTPScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo  />
      <Header>Resend OTP</Header>
      <TextInput
        label="E-mail "
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
       // description="You will receive email with password reset link."
      />
       <Text>OR</Text>
      <TextInput
        label="Phone#"
        returnKeyType="done"
        keyboardType="numeric"
        value={phoneno.value}
        onChangeText={(text) => setPhoneno({ value: text, error: '' })}
        error={!!phoneno.error}
        errorText={phoneno.error}
      //secureTextEntry
      />
      <Button
        mode="contained"
        onPress={sendOTP}
        style={{ marginTop: 16 }}
      >
        Send OTP
      </Button>
    </Background>
  )
}
