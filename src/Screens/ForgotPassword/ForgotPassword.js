import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import TextInput from "../../Components/TextInputs/TextInputs";
import Buttons from "../../Components/Buttons/Buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Modal from "../../Components/Modals/Modals";
import Theme from "../../Utils/Theme";
import styles from "./Style";
import { Formik } from "formik";
import * as yup from "yup";
import { auth } from "../../Utils/Exports";

const reviewSchema = yup.object({
  Email: yup.string().email("Invalid email").required("Required Field"),
});
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loader, Setloader] = useState(false);

  const forgotEmail = (email) => {
    Setloader(true);
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        Setloader(false);
        alert("Reset Password Email Send Successfully");
      })
      .catch((error) => {
        Setloader(false);
        alert("Email Address does not exists", error);
      });
  };

  return (
    <View style={styles.MainView}>
      <KeyboardAwareScrollView>
        <Image
          source={require("../../Assets/Logo.jpg")}
          style={styles.imgForgot}
        />
        <View style={styles.setWidth}>
          <Text style={styles.txtPass}>Forgot Password</Text>
          <Text style={styles.txtEnter}>
            Enter your email address for password recovery
          </Text>
          <Formik
            initialValues={{ Email: email }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              // action is use  for call reset form
              actions.resetForm();
              forgotEmail(values.Email);
            }}
          >
            {(props) => (
              <View style={styles.wrapTxtInp}>
                <Text style={styles.txtEmail}>Email</Text>
                <TextInput
                  placeholder="Input Email"
                  simpleTxtInput={true}
                  value={props.values.Email}
                  onChangeText={props.handleChange("Email")}
                />
                <Text style={styles.errorTxt}>
                  {props.touched.Email && props.errors.Email}
                </Text>
                <View style={{ margin: "5%" }}>
                  <Buttons
                    btnSmall={true}
                    label={"Next"}
                    alignSelf={Theme.align}
                    onPress={props.handleSubmit}
                    BGcolor={Theme.white}
                    txtColor={Theme.primary}
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
        label={"Loading please wait..."}
      />
    </View>
  );
};
export default ForgotPassword;
