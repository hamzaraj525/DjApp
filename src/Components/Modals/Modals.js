import React from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import Theme from "../../Utils/Theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import Modal from "react-native-modal";
import styles from "./Style";
const Modals = (props) => {
  const { loader, loaderIndicator, label } = props;
  return (
    <>
      {loaderIndicator === true ? (
        <Modal isVisible={loader}>
          <View style={styles.modalWrap}>
            {/* <Image
              source={require('../../Assets/Logo.jpg')}
              style={styles.imgLogo}
            /> */}

            <ActivityIndicator
              size="large"
              color={Theme.white}
              style={styles.indic}
            />
            <Text style={styles.txtLoading}>{label}</Text>
          </View>
        </Modal>
      ) : null}
    </>
  );
};
export default Modals;
