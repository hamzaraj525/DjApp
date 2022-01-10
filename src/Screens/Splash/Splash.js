import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useSelector } from "react-redux";
import styles from './Style';

const Splash = ({ navigation }) => {
  const { uid } = useSelector((state) => state.userReducer);


  console.log("UserID  ", uid);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
      // if (uid) {
      //   navigation.replace("Library");
      // } else if (uid === undefined) {
      //   alert("error")
      //   navigation.replace("LoginScreen");
      // }
    }, 2000);
  }, []);

  return (
    <View style={styles.MainView}>
      <Image
        source={require('../../Assets/Logo.jpg')}
        style={styles.imgSplash}
      />
    </View>
  );
};
export default Splash;
