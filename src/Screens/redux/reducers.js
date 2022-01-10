import {
  LOGINDATA,
  FIRESTORE,
  REALTIME,
  UID,
  LOGOUT,
} from "./constants";

const initialState = {
  loginData: [],
  firestoreData: [],
  realTimeData: [],
  uid: ''
};
// console.log("reducer 1===============>", initialState);
function userReducer(state = initialState, action) {
  // console.log("reducer 2===============>", state)
  switch (action.type) {
    case LOGINDATA:
      return { ...state, loginData: action.payload };

    case UID:
      return { ...state, uid: action.payload };

    case FIRESTORE:
      return { ...state, firestoreData: action.payload };

    case REALTIME:
      return { ...state, realTimeData: action.payload };

    case LOGOUT:
      return { ...state, uid: action.payload };

    default:
      return state;
  }
}

export default userReducer;
