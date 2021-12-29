import React, { useEffect, useState } from "react";

import { View, Image, Text } from "react-native";
import Modal from "../../Components/Modals/Modals";
import { auth, db } from "../../Utils/Exports";
import Buttons from "../../Components/Buttons/Buttons";
import Entypo from "react-native-vector-icons/Entypo";
import TextInput from "../../Components/TextInputs/TextInputs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import styles from "./Style";
import Theme from "../../Utils/Theme";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  FIRSTNAME: yup
    .string()
    .min(0, "Minimum Input")
    .required("Required Field")
    .max(10, "Limit Exceed"),
  LASTNAME: yup
    .string()
    .min(0, "Minimum Input")
    .required("Required Field")
    .max(10, "Limit Exceed"),
  EMAIL: yup.string().email("Invalid email").required("Required Field"),
  PASSWORD: yup
    .string()
    .min(8, "Minimun length of 8 character")
    .required("Required Field"),
  CONFIRMPASSWORD: yup
    .string()
    .oneOf([yup.ref("PASSWORD"), null], "Passwords must match")
    .required(""),
});

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [icEye, setIcEye] = useState("eye-with-line");
  const [icEye1, setIcEye1] = useState("eye-with-line");
  const [showPassword1, setShowPassword1] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [loader, Setloader] = useState(false);

  const signUpFun = (FIRSTNAME, LASTNAME, EMAIL, PASSWORD, CONFIRMPASSWORD) => {
    Setloader(true);
    auth
      .createUserWithEmailAndPassword(EMAIL, PASSWORD)
      .then(() => {
        const currentUid = auth.currentUser.uid;
        db.ref("Parents/" + currentUid).set({
          user: {
            firstName: FIRSTNAME,
            lastName: LASTNAME,
            confpassword: CONFIRMPASSWORD,
            email: EMAIL,
            password: PASSWORD,
            uid: auth.currentUser.uid,
            adminoruser: "user",
            feedback: "No",
          },
        });
        Setloader(false);
        console.log("User account created & signed in!");
        navigation.navigate("PaymentScreen");
      })
      .catch((error) => {
        Setloader(false);
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }

        console.error(error);
      });
  };

  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye("eye");
    } else {
      setIcEye("eye-with-line");
    }
  };
  const eyeIconFun1 = () => {
    setShowPassword1(!showPassword1);
    if (showPassword1 === true) {
      setIcEye1("eye");
    } else {
      setIcEye1("eye-with-line");
    }
  };

  return (
    <View style={styles.MainView}>
      <KeyboardAwareScrollView>
        <View style={styles.setView}>
          <Entypo
            name={"chevron-thin-left"}
            size={Theme.iconSize}
            style={{ position: "absolute", marginTop: "5%" }}
            color={Theme.white}
            onPress={() => navigation.navigate("LoginScreen")}
          />
          <Image
            source={require("../../Assets/Logo.jpg")}
            style={styles.imgSignUp}
          />

          <Formik
            initialValues={{
              FIRSTNAME: firstName,
              LASTNAME: lastName,
              EMAIL: email,
              PASSWORD: password,
              CONFIRMPASSWORD: confpassword,
            }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              // action is use  for call reset form
              actions.resetForm();
              signUpFun(
                values.FIRSTNAME,
                values.LASTNAME,
                values.EMAIL,
                values.PASSWORD,
                values.CONFIRMPASSWORD
              );
            }}
          >
            {(props) => (
              <>
                <Text style={styles.txtParent}>Sign Up</Text>
                <View style={{ ...styles.wrapEmailPass, paddingBottom: 10 }}>
                  <View style={styles.flexJustify}>
                    <View style={styles.width45}>
                      <TextInput
                        placeholder="First Name"
                        simpleTxtInput={true}
                        value={props.values.FIRSTNAME}
                        onChangeText={props.handleChange("FIRSTNAME")}
                        width={Theme.width100}
                      />
                      <Text style={styles.errorTxt}>
                        {props.touched.FIRSTNAME && props.errors.FIRSTNAME}
                      </Text>
                    </View>
                    <View style={styles.width45}>
                      <TextInput
                        placeholder="Last Name"
                        simpleTxtInput={true}
                        value={props.values.LASTNAME}
                        onChangeText={props.handleChange("LASTNAME")}
                        width={Theme.width100}
                      />
                      <Text style={styles.errorTxt}>
                        {props.touched.LASTNAME && props.errors.LASTNAME}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <TextInput
                      placeholder="EMAIL"
                      simpleTxtInput={true}
                      value={props.values.EMAIL}
                      onChangeText={props.handleChange("EMAIL")}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.EMAIL && props.errors.EMAIL}
                    </Text>
                  </View>
                  <View>
                    <View style={styles.wrapPassTxtInp}>
                      <TextInput
                        placeholder="Password"
                        simpleTxtInput={true}
                        value={props.values.PASSWORD}
                        secureTextEntry={showPassword}
                        maxLength={25}
                        onChangeText={props.handleChange("PASSWORD")}
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
                      {props.touched.PASSWORD && props.errors.PASSWORD}
                    </Text>
                  </View>
                  <View>
                    <View style={styles.wrapPassTxtInp}>
                      <TextInput
                        placeholder="Confirm Password"
                        simpleTxtInput={true}
                        value={props.values.CONFIRMPASSWORD}
                        secureTextEntry={showPassword1}
                        maxLength={25}
                        onChangeText={props.handleChange("CONFIRMPASSWORD")}
                      />
                      <Entypo
                        name={icEye1}
                        size={Theme.iconSize}
                        style={{ right: Theme.wp("5%") }}
                        color="grey"
                        onPress={() => eyeIconFun1()}
                      />
                    </View>
                    <Text style={styles.errorTxt}>
                      {props.touched.CONFIRMPASSWORD &&
                        props.errors.CONFIRMPASSWORD}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginTop: "7%",
                    }}
                  >
                    <Buttons
                      btnSmall={true}
                      label={"Sign Up"}
                      alignSelf={Theme.align}
                      onPress={props.handleSubmit}
                      BGcolor={Theme.white}
                      txtColor={Theme.primary}
                    />
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
      <Modal
        loader={loader}
        loaderIndicator={true}
        label={"Loading please wait..."}
      />
    </View>
  );
};

export default SignUp;
