import React from 'react'
import {Text,View} from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
// This is our main screen
export default function RigvStartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>RigV</Header>
      <Paragraph>
        Define Accuracy
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RigvLoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RigvRegisterScreen')}
      >
        Sign Up
      </Button>
       
    </Background>
  )
}
