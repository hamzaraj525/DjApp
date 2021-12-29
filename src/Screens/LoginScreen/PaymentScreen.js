import React, { useEffect, useState } from "react";

import { View, Image, Text, TouchableOpacity } from "react-native";
import Buttons from "../../Components/Buttons/Buttons";
import Modal from "../../Components/Modals/Modals";
import Entypo from "react-native-vector-icons/Entypo";
import TextInput from "../../Components/TextInputs/TextInputs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import styles from "./Style";
import Theme from "../../Utils/Theme";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  Password: yup
    .string()
    .required("required valid password")
    .min(8, "Minmum 8 Strings Required")
    .max(30, "Limit Exceed"),

  Cvv: yup
    .string()
    .required("cvv required")
    // .min(3, "invalid")
    .max(3, "Limit Exceed"),

  expiryDate: yup
    .string()
    .required("enter card expiry date")
    .min(4, "invalid")
    .max(5, "Limit Exceed"),
});

const PaymentScreen = ({ navigation }) => {
  const [Cvv, setCvv] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(true);
  const [loader, Setloader] = React.useState(false);

  //Set Eye Icon
  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye("eye");
    } else {
      setIcEye("eye-with-line");
    }
  };
  const PaymentFun = (expiryDate, Password, Cvv) => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.MainView}>
      <KeyboardAwareScrollView>
        <View style={styles.setView}>
          <Text style={styles.txtSubs}>Subscribtion</Text>
          <Image
            source={require("../../Assets/dabit.png")}
            style={styles.imgSplash}
          />
          <Formik
            initialValues={{
              expiryDate: expiryDate,
              Password: password,
              Cvv: Cvv,
            }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              // action is use  for call reset form
              actions.resetForm();
              PaymentFun(values);
            }}
          >
            {(props) => (
              <View style={styles.wrapEmailPass}>
                <View style={{ paddingHorizontal: 20 }}>
                  <Text style={styles.txtCardPass}>Password</Text>
                  <View style={styles.wrapPassTxtInp}>
                    <TextInput
                      placeholder="********"
                      simpleTxtInput={true}
                      value={props.values.Password}
                      secureTextEntry={showPassword}
                      maxLength={25}
                      onChangeText={props.handleChange("Password")}
                    />
                  </View>
                  <Text style={styles.errorTxt}>
                    {props.touched.Password && props.errors.Password}
                  </Text>
                </View>
                <View style={styles.viewCVVAndEx}>
                  <View>
                    <Text style={styles.txtCardPass}>CVV</Text>
                    <View style={styles.wrapCvv}>
                      <TextInput
                        placeholder="123"
                        whiteBgTxtInp={true}
                        value={props.values.Cvv}
                        maxLength={3}
                        onChangeText={props.handleChange("Cvv")}
                      />
                    </View>
                    <Text style={styles.errorTxt}>
                      {props.touched.Cvv && props.errors.Cvv}
                    </Text>
                  </View>
                  <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.txtCardPass}>EXP</Text>
                    <View style={styles.wrapCvv}>
                      <TextInput
                        placeholder="07/21"
                        whiteBgTxtInp={true}
                        value={props.values.expiryDate}
                        maxLength={5}
                        onChangeText={props.handleChange("expiryDate")}
                      />
                    </View>
                    <Text style={styles.errorTxt}>
                      {props.touched.expiryDate && props.errors.expiryDate}
                    </Text>
                  </View>
                </View>
                <View style={{ margin: "5%" }}>
                  <Buttons
                    btnMedium={true}
                    label={"Proceed Payments"}
                    alignSelf={Theme.align}
                    onPress={props.handleSubmit}
                    BGcolor={Theme.blue}
                    txtColor={Theme.txtWhite}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
      <Modal
        loader={loader}
        loaderIndicator={true}
        label={"Signing In please wait..."}
      />
    </View>
  );
};

export default PaymentScreen;
