import React, { useState } from 'react'
import Background from '../components/Background'
import { StyleSheet,TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { Text,View,Image } from 'react-native';
import { theme } from '../RigvTheme/Rigvtheme'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

export default function RigvOTPScreen({ navigation }) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({value,setValue,});

  return (
    <Background>
    <Image source={require('../RigvImg/otp.png')} style={styles.image} />
      <Header>Verification</Header>              
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View            
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
     <Paragraph /> 
    <Paragraph>Do not receive OTP</Paragraph>
      <View style={styles.otp}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResendOTPScreen')}
        >
          <Text style={styles.resend}>Resend again</Text>
        </TouchableOpacity>
      </View>  
      <Paragraph />
      <Button
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'RigvDashboard' }],
          })
        }
      >
        Verify
      </Button>
    </Background>
  )
}
 
const styles = StyleSheet.create({
  root: {padding: 20, minHeight: 300},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
      marginTop: 20,
      width: 280,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cellRoot: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    cellText: {
      color: '#000',
      fontSize: 36,
      textAlign: 'center',
    },
    focusCell: {
      borderBottomColor: '#007AFF',
      borderBottomWidth: 2,
    },
     
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    otp: {
      fontSize: 13,
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    resend: {
      fontSize: 13,
      color: theme.colors.secondary,
    },
  })