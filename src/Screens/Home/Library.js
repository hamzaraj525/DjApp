import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from "./Style";
import Headers from '../../Components/Buttons/Buttons';
import Sound from 'react-native-sound';
import Feather from "react-native-vector-icons/Feather";
import Theme from "../../Utils/Theme";
import database from "@react-native-firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";


// import { firestoreData } from '../redux/actions';
// import {connect} from 'react-redux';

class Library extends Component {
      
  sound = null;
  constructor(props) {
    super(props);
    this.state = {
      
      PlayList: [],
      PlayListTwo: [],
      audioFile: '',
      recording: false,
      // loaded: false,
      paused: true,
      selectedIndex: [],
      text: false,
      check: false,
    };
  }

  selectItem = index => {
    // console.log(`this.state.selectedIndex`, this.state.selectedIndex);
  
    if (this.state.selectedIndex.indexOf(index) > -1) {
      let newArray = this.state.selectedIndex.filter(indexObject => {
        if (indexObject == index) {
          return false;
        }
        return true;
      });

      this.setState({selectedIndex: newArray});
    } else {
      this.setState({selectedIndex: [...this.state.selectedIndex, index]});
    }
  };
  // async componentDidMount() {
  //   this.setState({PlayList: this.props?.data});
  // }


  async componentDidMount() {
    const reference = database().ref('/URL');  

    reference.on('value', snapshot => {
      // console.log('User data: ', snapshot.val());
      this.setState({PlayList: snapshot.val().Url});

      // if (this.state.PlayListTwo.length > 0){
      //   for (var i = 0; i < this.state.PlayList.length; i ++){
      //     AsyncStorage.setItem("@songs", this.state.PlayListTwo);
      //     console.log("setData");
      //   }
      //   this.readData();
      // }
    })
  }

//     readData = async () => {
//       console.log("did");
//     try {
//       const getData = await AsyncStorage.getItem('@songs');
//       this.setState({PlayList: getData});
//       console.log("$$$$$$ ", this.state.PlayList);
//   } catch (e) {
//     alert('Failed to fetch the data from storage')
//   }
// }


  load = item => {
    // console.log('load items===>', item);
    return new Promise((resolve, reject) => {
      if (!item) {
        return reject('file path is empty');
      }

      this.sound = new Sound(item, '', error => {
        if (error) {
          console.log('failed to load the file', error);
          return reject(error);
        }
        // this.setState({ loaded: true });
        this.setState({paused: false});
        Sound.setCategory('Playback');

        this.sound.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
          this.setState({paused: true});
        });
        return resolve();
      });
    });
  };

  pause = item => {
    console.log('Item pause', item);
    this.sound.pause();
    this.setState({paused: true});
  };
  
  render() {

  // console.log("###$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", this.state.PlayList);
      // console.log("%%%%%%  ", this.state.PlayList);

// console.log("redux data   ", this.props?.firestoreData);
//  const { data} = this.props;

    // console.log("firestoreData ", this.props?.data);

// console.log("##### ", this.state.selectedIndex) ;

  // const newE = this.state.selectedIndex.map((item) => {
  //   console.log("%%%%%  ", item);
  // })

    return (
      <View style={styles.MainView}>
        <Headers
          labelIcon={true}
          label="Library"
          onBackPress={() => this.props.navigation.goBack()}
        />
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
              marginLeft: 50,
              }}
              > SJS ADMIN </Text>
          </View>
      <View style={styles.deviderLast}></View>

        {this.state.PlayList.length > 0 ? (
          <>
            <FlatList
              data={this.state.PlayList}
              renderItem={({item, index}) => {
                // console.log('item', JSON.stringify(item));
                return (
                  <View style={styles.wrapContent}>
                    <View
                      style={styles.flexJustify}>
                      <View style={{width: '70%'}}>
                        <Text style={styles.txtName}>DJS Music</Text>
                        {/* <Text style={styles.txtName}>{item}</Text> */}
                      </View>

                      <TouchableOpacity onPress={() => {
                          this.selectItem(index);
                          {
                            this.state.selectedIndex.indexOf(index) > -1
                              ? this.pause()
                              : this.load(item);
                          }
                        }}
                        disabled={!item}>
                        <Feather
                          name={this.state.selectedIndex.indexOf(index) > -1 ? "pause-circle" : "play-circle"}
                          size={30}
                          color={this.state.selectedIndex.indexOf(index) > -1 ? "#00b503" : "#007cb5"}
                          style={styles.icon}
                        />
                      </TouchableOpacity>


                      {/* <TouchableOpacity
                        onPress={() => {
                          this.selectItem(index);
                          {
                            this.state.selectedIndex.indexOf(index) > -1
                              ? this.pause()
                              : this.load(item);
                          }
                        }}
                        disabled={!item}>
                        {this.state.selectedIndex.indexOf(index) > -1 ? (
                          <Image
                            source={require('../../Assets/pauseButton.png')}
                            style={styles.imgPauseBtn}
                          />
                        ) : (
                          <Image
                            source={require('../../Assets/playButton.png')}
                            style={styles.imgPauseBtn}
                          />
                        )} */}

                        {/* {this.state.text == true ? <Text>test</Text> : null} */}
                      {/* </TouchableOpacity> */}
                    </View>
                  </View>
                );
              }}
            />
          </>
        ) : (
          <Text style={styles.txtNoData}>Please Upload First</Text>
        )}
      </View>
    );
  }
}
// const mapStateToProps = (state) => ({
//   // firestoreData: state.reducers.firestoreData,
//   data: state.userReducer.firestoreData,
// });
// export default connect(mapStateToProps)(Library);

export default Library;
