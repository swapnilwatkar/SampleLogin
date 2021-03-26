import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Image } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../RigvTheme/Rigvtheme'
import { emailValidator } from '../Rigvhelpers/emailValidator'
import { phonenoValidator } from '../Rigvhelpers/phonenoValidator'

export default function RigvLoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phoneno, setPhoneno] = useState({ value: '', error: '' })


  const onLoginPressed = () => {
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
    navigation.reset({
      index: 0,
      routes: [{ name: 'RigvOTPScreen' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Image source={require('../RigvImg/logo.png')} style={styles.image} />
      <Header>RigV</Header>
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
      <Button mode="contained" onPress={onLoginPressed}>
        GET OTP
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RigvRegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
})
