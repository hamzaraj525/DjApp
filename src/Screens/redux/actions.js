import {
  LOGINDATA,
  FIRESTORE,
  REALTIME,
  UID,
  LOGOUT,
} from "./constants";

export const LoginData = (data) => (dispatch) => {
  // console.log("action======>", login data);
  dispatch({
    type: LOGINDATA, payload: data
  })
};

export const Uid = (data) => (dispatch) => {
  // console.log("action======>", login data);
  dispatch({
    type: UID, payload: data
  })
};

export const FirestoreData = (data) => (dispatch) => {
  // console.log("action======>", login data);
  dispatch({
    type: FIRESTORE, payload: data
  })
};
export const MusicData = (data) => (dispatch) => {
  console.log("MUSIC ACTION======>", data);
  dispatch({
    type: REALTIME, payload: data
  })
};

export const Logout = () => ({
  type: "LOGOUT",
});


