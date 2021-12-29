import React from 'react';
import { View, Text, Image } from 'react-native';
import Theme from '../../Utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const Headers = props => {
  const {
    NameLabel,
    simpleChat,
    imgSrc,
    onPress,
    imgVectorMix,
    imgVectorMixs,
    iconTitle,
    label,
    TwoIconOneTitle,
    onProfilePress,
    onFeedbackPress,
    onSettingPress,
    backAndChat,
    onChatPress,
  } = props;

  return (
    <>
      {simpleChat === true ? (
        <View style={styles.headerWrap}>
          <AntDesign
            name="left"
            size={Theme.iconSizeLarge}
            color={Theme.white}
            onPress={onPress}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: Theme.align,
              paddingLeft: '5%',
            }}>
            <Image source={imgSrc} style={styles.imgStyle} />
            <Text style={{ ...styles.txtLabel, left: '10%' }}>{NameLabel}</Text>
          </View>
        </View>
      ) : imgVectorMix === true ? (
        <View style={styles.flexJustify}>
          <AntDesign
            name="left"
            size={Theme.iconSizeLarge}
            color={Theme.primary}
            onPress={onPress}
            style={{ marginTop: '5%' }}
          />

          <Image source={imgSrc} style={styles.imgStyle1} />
          <Text style={{ color: Theme.primary }}>.</Text>
        </View>
      ) : imgVectorMixs === true ? (
        <View style={styles.flexJustify}>
          <AntDesign
            name="left"
            size={Theme.iconSizeLarge}
            color={Theme.white}
            onPress={onPress}
            style={{ marginTop: '5%' }}
          />

          <Image source={imgSrc} style={styles.imgStyle1} />
          <Text style={{ color: Theme.primary }}>.</Text>
        </View>
      ) : iconTitle === true ? (
        <View style={styles.flecBgHeader}>
          <AntDesign
            name="left"
            size={Theme.iconSize}
            color={Theme.white}
            onPress={onPress}
          />

          <Text style={styles.txtLabel}>{label}</Text>
          <Text style={{ color: Theme.primary }}>.</Text>
        </View>
      ) : TwoIconOneTitle === true ? (
        <View style={styles.alignHeader}>
          <Menu>
            <MenuTrigger>
              <Ionicons
                name="person-circle-outline"
                color={Theme.white}
                size={Theme.iconSizeLarge}
              />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption text="Profile" onSelect={onProfilePress} />
              <MenuOption text="Feedbacks" onSelect={onFeedbackPress} />
              <MenuOption text="Setting" onSelect={onSettingPress} />
            </MenuOptions>
          </Menu>
          <Text style={styles.txtLabel}>{label}</Text>
          <AntDesign
            name="wechat"
            color={Theme.white}
            size={Theme.iconSizeLarge}
            onPress={onPress}
          />
        </View>
      ) : backAndChat === true ? (
        <View
          style={{
            ...styles.flexJustify,
            padding: '3%',
            backgroundColor: Theme.primary,
          }}>
          <AntDesign
            name="left"
            size={Theme.iconSize}
            color={Theme.white}
            onPress={onPress}
          />

          <AntDesign
            name="wechat"
            color={Theme.white}
            size={Theme.iconSizeLarge}
            onPress={onChatPress}
          />
        </View>
      ) : null}
    </>
  );
};
export default Headers;
