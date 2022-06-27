import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './Style';
import Headers from '../../Components/Buttons/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../Utils/Theme';
import database from '@react-native-firebase/database';
import {MusicData} from '../redux/actions';
// import { firestoreData } from '../redux/actions';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {Logout} from '../redux/actions';

class Library extends Component {
  NetInfoSubscription = null;

  sound = null;
  constructor(props) {
    super(props);
    this.state = {
      conn_status: '',
      PlayList: [],
      audioFile: '',
      recording: false,
      // loaded: false,
      play: false,
      selectedIndex: [],
      text: false,
      connectionStatus: false,
    };
    // this.InternetConnection();
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

  // InternetConnection = async () => {
  //   await NetInfo.fetch().then(state => {
  //     console.log("Connection type", state.type);
  //     console.log("Is connected?", state.isConnected);

  //     if (state.isConnected == true) {
  //       this.setState({ conn_status: 'online' })
  //     } else {
  //       this.setState({ conn_status: 'offline' })
  //     }
  //   });
  // }

  async componentDidMount() {
    this.NetInfoSubscription = NetInfo.addEventListener(
      this._handleConnectivityChange,
    );

    database()
      .ref('/songsUrl')
      .on('value', snapshot => {
        var li = [];
        snapshot.forEach(child => {
          console.log(child.val());
          li.push({
            key: child.val().key,
            fileUrl: child.val().fileUrl,
            fileName: child.val().fileName,
          });
        });

        this.setState({PlayList: li});
      });
    if (this.state.connectionStatus == true) {
      this.props?.dispatch(MusicData(this.state.PlayList));
      console.log('ONLINE');
    } else if (this.state.connectionStatus == false) {
      // alert('currently you are offline');
      console.log('Offline now');
    }
    // console.log(".......... ",  this.state.PlayList.Url);
  }

  componentWillUnmount() {
    this.NetInfoSubscription && this.NetInfoSubscription();
  }

  _handleConnectivityChange = state => {
    this.setState({connectionStatus: state.isConnected});
    // alert(this.state.connectionStatus);
    if (this.state.isConnected == true) {
      console.log('Connection ', this.state.connectionStatus);
    } else if (this.state.connectionStatus == false) {
      console.log('Connection ', this.state.connectionStatus);
    }
  };

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
  playSong = item => {
    Sound.setCategory('Playback');

    var whoosh = new Sound(item.fileUrl, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      if (this.state.play == false) {
        whoosh.play();
        this.setState({play: true});
      } else {
        whoosh.pause();
        this.setState({play: false});
      }
    });
  };

  LogoutFun = () => {
    console.log('Logout button click');
    this.props?.dispatch(Logout());
    AsyncStorage.clear();
    this.props.navigation.replace('SplashScreen');
  };

  render() {
    // console.log("###", this.state.PlayList);

    // console.log("redux data   ", this.props?.firestoreData);
    const {data} = this.props;

    // console.log("REALTIME ", this.props?.data);

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
            source={require('../../Assets/Logo.jpg')}
            style={styles.imgSplash}
          />
          <Text
            style={{
              ...styles.txtWelcome,
              textAlign: Theme.align,
              alignSelf: Theme.align,
              marginLeft: 50,
            }}>
            DJS Music
          </Text>
          <Feather
            name={this.state.connectionStatus ? 'wifi' : 'wifi-off'}
            size={20}
            color={'#fff'}
            style={{marginTop: '10%', marginLeft: '10%'}}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.LogoutFun()}
          style={styles.logout}>
          <MaterialIcons name="logout" size={20} color={'#fff'} />
        </TouchableOpacity>
        <View style={styles.deviderLast}></View>

        <>
          <FlatList
            data={this.state.PlayList}
            renderItem={({item, index}) => {
              // console.log('item', JSON.stringify(item));
              return (
                <View style={styles.wrapContent}>
                  <View style={styles.flexJustify}>
                    <View style={{width: '70%'}}>
                      <Text style={styles.txtName}>{item.fileName}</Text>
                      {/* <Text style={styles.txtName}>{item.fileUrl}</Text> */}
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        this.playSong(item);
                      }}>
                      <Feather
                        name={this.state.play ? 'pause-circle' : 'play-circle'}
                        size={30}
                        color={'#007cb5'}
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
            keyExtractor={item => item.key}
          />
        </>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  data: state.userReducer.realTimeData,
  // data: state.userReducer.firestoreData,
});
export default connect(mapStateToProps)(Library);

// export default Library;
