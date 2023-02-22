import React, {useMemo} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

// import UserData from './data.json';

function Details({route}) {
  const {users, detailId} = useSelector((state: RootState) => state.user);

  const currUser = useMemo(() => {
    if (detailId) {
      return users[detailId - 1];
    }
  }, [users, detailId]);

  if (!currUser) {
    console.log('User not found::', route.params);
    return null;
  }

  return (
    <SafeAreaView style={[styles.screen, {justifyContent: 'flex-start'}]}>
      <View style={{width: '100%', borderColor: 'blue', borderWidth: 1}}>
        <View style={[styles.DEBUG_STYLE, styles.detailSection]}>
          <Text style={[styles.headerText, styles.bold]}>{currUser.name}</Text>
          <Text style={[styles.text]}>{currUser.company.name}</Text>
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
          <Text style={[styles.text]}>{currUser.email}</Text>
          <Text style={[styles.text]}>{currUser.address.street}</Text>
          <Text style={[styles.text]}>{currUser.address.suite}</Text>
          <Text style={[styles.text]}>
            {currUser.address.city} {currUser.address.zipcode}
          </Text>
          <Text style={[styles.text]}>{currUser.phone}</Text>
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
          <Text style={[styles.text]}>User Name: {currUser.username}</Text>
          <Text style={[styles.text]}>Website: {currUser.website}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Details;
