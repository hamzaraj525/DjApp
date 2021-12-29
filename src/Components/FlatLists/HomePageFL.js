import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, RefreshControl } from 'react-native';
import Theme from '../../Utils/Theme';
import { auth, db } from '../../Utils/Exports';


import styles from './Style';
// import BidHistory from './BidHistoryFlatList';

const HomePageFL = props => {
  const { navigation, HomePageFL, data, } = props;


  return (
    <>
      {HomePageFL === true ? (
        <>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <>
				</>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
    
          />
        </>
      ) : null}
    </>
  );
};
export default HomePageFL;
