import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

function Details() {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text>User Details</Text>
      </View>
    </SafeAreaView>
  );
}

export default Details;
