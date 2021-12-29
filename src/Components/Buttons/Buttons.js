import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import Theme from "../../Utils/Theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./Style";
const Headers = (props) => {
  const { btnSmall, label, onPress, alignSelf, btnMedium } = props;
  return (
    <>
      {btnSmall === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnWrap,
            alignSelf: alignSelf,
            backgroundColor: props.BGcolor,
          }}
          onPress={onPress}
        >
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : btnMedium === true ? (
        <>
          <TouchableOpacity
            style={{
              ...styles.btnMediumWrap,
              alignSelf: alignSelf,
              backgroundColor: props.BGcolor,
            }}
            onPress={onPress}
          >
            <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
              {label}
            </Text>
          </TouchableOpacity>
        </>
      ) : null}
    </>
  );
};
export default Headers;
