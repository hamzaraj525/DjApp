import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

import styles from './Style';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
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
