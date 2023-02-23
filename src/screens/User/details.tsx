import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Hyperlink from '../../components/hyperlink';
import useUser from '../../redux/User/useUser';
import {linkToMap} from '../../utils';
import styles from './styles';

function Details() {
  const {currentUser} = useUser();

  if (!currentUser) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.screen, styles.detailsScreen]}>
      <View style={styles.detailsContainer}>
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
            styles.detailSectionAlignment,
          ]}>
          <Text style={[styles.headerText, styles.bold]}>
            Contact Information
          </Text>

          <Hyperlink link={currentUser.email} type={'EMAIL'} />

          <TouchableOpacity
            onPress={() =>
              linkToMap(
                `${currentUser.address.geo.lat},${currentUser.address.geo.lng}`,
              )
            }>
            <Text style={[styles.text]}>{currentUser.address.street}</Text>
            <Text style={[styles.text]}>{currentUser.address.suite}</Text>
            <Text style={[styles.text]}>
              {currentUser.address.city} {currentUser.address.zipcode}
            </Text>
          </TouchableOpacity>

          <Hyperlink link={currentUser.phone} type={'PHONE'} />
        </View>

        <View
          style={[
            styles.DEBUG_STYLE,
            styles.detailSection,
            styles.detailSectionAlignment,
          ]}>
          <Text style={[styles.headerText, styles.bold]}>
            Other Information
          </Text>
          <Text style={[styles.text]}>User Name: {currentUser.username}</Text>

          <View style={styles.websiteWrapper}>
            <Text style={[styles.text]}>Website: </Text>
            <Hyperlink link={currentUser.website} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Details;
