import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./Styles";
import Theme from "../../Utils/Theme";
import Feather from "react-native-vector-icons/Feather";
import Sound from "react-native-sound";

const DATA = [
  {
    id: "1",
    text: "Music One # 1",
  },
  {
    id: "2",
    text: "Music One # 2",
  },
  {
    id: "3",
    text: "Music One # 3",
  },
  {
    id: "4",
    text: "Music One # 4",
  },
  {
    id: "5",
    text: "Music One # 5",
  },
  {
    id: "6",
    text: "Music One # 6",
  },
  {
    id: "7",
    text: "Music One # 7",
  },
  {
    id: "8",
    text: "Music One # 8",
  },
  {
    id: "9",
    text: "Music One # 9",
  },
  {
    id: "10",
    text: "Music One # 10",
  },
];
  // const sound = new Sound(require('../../Assets/test.mp3'));

const sound = new Sound({uri: "https://firebasestorage.googleapis.com/v0/b/djs-app-596f7.appspot.com/o/SJSMusic%2Ftest.mp3?alt=media&token=77c204a4-a92c-4a46-9d22-37593df56879"});

const Home = ({ navigation }) => {
  const [icon, setIcon] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [download, setDownload] = useState([]);

  const Play = () => {
    // if (selectedIndex(index)) {
    //   console.log("start");
    //   selectedIndex = (index) => {
    //     console.log("start one");
    //     if (selectedIndex.indexOf(index) > -1) {
    //       console.log("start two");
    //       let newArray = selectedIndex.filter((indexObject) => {
    //         if (indexObject == index) {
    //           console.log("start three");
    //           return false;
    //         }
    //         return true;
    //       });

    //       setSelectedIndex({ selectedIndex: newArray });
    //     } else {
    //       setSelectedIndex({ selectedIndex: [...selectedIndex, index] });
    //     }
    //   };
    // }

    if (selectedIndex) {
      if (icon === true) {
        console.log("Stop");
        setIcon(false);
        sound.pause();
      } else if (icon === false) {
        setIcon(true);
        console.log("Play");
        sound.play();
      }
    } else {
      console.log("error");
    }
  };

  const renderItem = ({ item, index, id }) => (
    <Item
      text={item.text}
      navigation={navigation}
      index={index}
      onPress={() => Play(item.id) && setSelectedIndex(item.id)}
    />
  );

 

 

  const Item = ({ text, onPress, item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={onPress}>
          <Feather
            name={icon === true ? "pause-circle" : "play-circle"}
            size={30}
            color={!icon === true ? "#00b503" : "#007cb5"}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{text}</Text>
        <TouchableOpacity
          style={styles.download}
          onPress={() => console.log("download")}
        >
          <Feather
            name={"download"}
            size={26}
            color={"red"}
            style={styles.download}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.MainView}>
      <View style={styles.row}>
        <Image
          source={require("../../Assets/Logo.jpg")}
          style={styles.imgSplash}
        />
        <Text
          style={{
            ...styles.txtWelcome,
            textAlign: Theme.align,
            alignSelf: Theme.align,
            marginLeft: 100,
          }}
        >
          SJS
        </Text>
      </View>
      <FlatList
        // horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        navigation={navigation}
      />
    </View>
  );
};

export default Home;
