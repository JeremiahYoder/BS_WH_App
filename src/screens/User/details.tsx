/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

import useUser from '../../redux/User/useUser';

function Details() {
  const {currentUser} = useUser();

  if (!currentUser) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.screen, {justifyContent: 'flex-start'}]}>
      <View style={{width: '100%', borderColor: 'blue', borderWidth: 1}}>
        <View style={[styles.DEBUG_STYLE, styles.detailSection]}>
          <Text style={[styles.headerText, styles.bold]}>
            {currentUser.name}
          </Text>
          <Text style={[styles.text]}>{currentUser.company.name}</Text>
        </View>

        <View
          style={[
            styles.DEBUG_STYLE,
            styles.detailSection,
            {alignItems: 'flex-start'},
          ]}>
          <Text style={[styles.headerText, styles.bold]}>
            Contact Information
          </Text>
          <Text style={[styles.text]}>{currentUser.email}</Text>
          <Text style={[styles.text]}>{currentUser.address.street}</Text>
          <Text style={[styles.text]}>{currentUser.address.suite}</Text>
          <Text style={[styles.text]}>
            {currentUser.address.city} {currentUser.address.zipcode}
          </Text>
          <Text style={[styles.text]}>{currentUser.phone}</Text>
        </View>

        <View
          style={[
            styles.DEBUG_STYLE,
            styles.detailSection,
            {alignItems: 'flex-start'},
          ]}>
          <Text style={[styles.headerText, styles.bold]}>
            Other Information
          </Text>
          <Text style={[styles.text]}>User Name: {currentUser.username}</Text>
          <Text style={[styles.text]}>Website: {currentUser.website}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Details;
