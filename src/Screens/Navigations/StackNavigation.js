import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StatusBar, LogBox } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Theme from "../../Utils/Theme";
const Stack = createNativeStackNavigator();
//Screens Imported
import SplashScreen from "../Splash/Splash";
import LoginScreen from "../LoginScreen/LoginScreen";
import SignupScreen from "../LoginScreen/SignupScreen";
import Library from "../Home/Library";
import PaymentScreen from "../LoginScreen/PaymentScreen";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

function Navigation() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="light-content" />
        ) : (
          <StatusBar barStyle="light-content" backgroundColor={Theme.primary} />
        )}
      </View>

      <Stack.Navigator
        initialRouteName="ParentsProfile"
        // initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default Navigation;
