import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { theme } from './RigvTheme/Rigvtheme'
import {
  RigvStartScreen,
  RigvLoginScreen,
  RigvRegisterScreen,
  ResendOTPScreen,
  RigvDashboard,
  RigvOTPScreen,
  RigvTraccar,
  RigvGroup,
} from './RigvScreens'
import {
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import { Header } from 'react-native-elements';

const Stack = createStackNavigator()

const Tab = createMaterialTopTabNavigator();
 
function Dashboard() {
  return (
   
      <SafeAreaView style={styles.container}>
        <Header style={styles.headerStyle}/>
        <Tab.Navigator  >
          <Tab.Screen name="Dashboard" component={RigvDashboard } />
          <Tab.Screen name="Traccar" component={RigvTraccar} />
          <Tab.Screen name="Group" component={RigvGroup} />
        </Tab.Navigator>
         
    </SafeAreaView>
   
  );
}
export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="RigvStartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="RigvStartScreen" component={RigvStartScreen} />
          <Stack.Screen name="RigvLoginScreen" component={RigvLoginScreen} />
          <Stack.Screen name="RigvRegisterScreen" component={RigvRegisterScreen} />
          <Stack.Screen name="ResendOTPScreen" component={ResendOTPScreen}/>
          <Stack.Screen name="RigvOTPScreen" component={RigvOTPScreen} />
          <Stack.Screen name="RigvDashboard" component={Dashboard} />
           
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    backgroundColor: '#162252',
     
  },
});