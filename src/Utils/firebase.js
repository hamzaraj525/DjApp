import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { createContext } from "vm";

export const firebase = createContext();

export const firebase = ({ children }) => {
  const [user, setUser] = (useState = null);
  return (
    <AuthContext.AuthProvider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.AuthProvider>
  );
};
