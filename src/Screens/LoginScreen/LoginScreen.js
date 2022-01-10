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
import { auth } from "../../Utils/Exports";
import { useSelector, useDispatch } from "react-redux";
import { LoginData, Uid } from "../redux/actions";

const reviewSchema = yup.object({
  Email: yup.string().email("Invalid email").required("Required Field"),
  Password: yup
    .string()
    .required("Password field not empty")
    .min(8, "Minmum 8 Strings Required")
    .max(30, "Limit Exceed"),
});

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("faisal724.one@gmail.com");
  const [password, setPassword] = React.useState("Admin@123");
  const [icEye, setIcEye] = React.useState("eye-with-line");
  const [showPassword, setShowPassword] = React.useState(true);
  const [loader, Setloader] = React.useState(false);
  const dispatch = useDispatch();


  //Set Eye Icon
  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye("eye");
    } else {
      setIcEye("eye-with-line");
    }
  };
  const loginFunc = (Email, Password) => {
    console.log("Input ", Email, Password);
    Setloader(true);
    auth
      .signInWithEmailAndPassword(Email, Password)
      .then((data) => {
        Setloader(false);
        dispatch(LoginData(data));
        dispatch(Uid(data.user.uid));
        console.log("User account created & signed in!");
        navigation.navigate("Library");
      })
      .catch((error) => {
        Setloader(false);
        alert("Credential invalid!");
      });
  };


  return (
    <View style={styles.MainView}>
      <KeyboardAwareScrollView>
        <View style={styles.setView}>
          <Image
            source={require("../../Assets/Logo.jpg")}
            style={styles.imgLogin}
          />
          <TouchableOpacity
            style={styles.btnSubs}
            onPress={() => navigation.navigate("PaymentScreen")}
          >
            <Text style={styles.txtSub}>Subscribe</Text>
          </TouchableOpacity>
          <Text style={styles.txtWelcome}>Log In</Text>
          <Formik
            initialValues={{ Email: email, Password: password }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              // action is use  for call reset form
              actions.resetForm();
              loginFunc(values.Email, values.Password);
            }}
          >
            {(props) => (
              <View style={styles.wrapEmailPass}>
                <TextInput
                  placeholder="Input Email"
                  simpleTxtInput={true}
                  value={props.values.Email}
                  onChangeText={props.handleChange("Email")}
                />
                <Text style={styles.errorTxt}>
                  {props.touched.Email && props.errors.Email}
                </Text>
                <View>
                  <View style={styles.wrapPassTxtInp}>
                    <TextInput
                      placeholder="Input Password"
                      simpleTxtInput={true}
                      value={props.values.Password}
                      secureTextEntry={showPassword}
                      maxLength={25}
                      onChangeText={props.handleChange("Password")}
                    />
                    <Entypo
                      name={icEye}
                      size={Theme.iconSize}
                      style={{ right: Theme.wp("5%") }}
                      color="grey"
                      onPress={() => eyeIconFun()}
                    />
                  </View>
                  <Text style={styles.errorTxt}>
                    {props.touched.Password && props.errors.Password}
                  </Text>
                </View>

                <View style={{ margin: "5%" }}>
                  <Buttons
                    btnSmall={true}
                    label={"Log In"}
                    alignSelf={Theme.align}
                    onPress={props.handleSubmit}
                    BGcolor={Theme.white}
                    txtColor={Theme.primary}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  <Text style={styles.txtForgotPass}>Forgot Password ?</Text>
                </TouchableOpacity>

                <View style={styles.flexMarginRow}>
                  <View style={styles.widthBorder} />
                  <Text style={styles.txtOr}>or</Text>
                  <View style={styles.widthBorder} />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignupScreen")}
                >
                  <Text style={styles.txtNotAccount}>
                    if you don't have an account?{" "}
                    <Text
                      style={{
                        ...styles.txtNotAccount,
                        fontWeight: "bold",
                        color: "#b3d334",
                      }}
                    >
                      {" "}
                      Sign Up
                    </Text>
                  </Text>
                </TouchableOpacity>
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

export default Login;
