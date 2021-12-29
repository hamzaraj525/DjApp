import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const RootStack = createNativeStackNavigator();
// Navigator Screens
import Navigation from './src/Screens/Navigations/StackNavigation';

function App() {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator
            headerMode="none"
            screenOptions={{
              headerShown: false,
            }}>
            <RootStack.Screen name="Navigation" component={Navigation} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default App;
