import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

function List() {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text>User List</Text>
      </View>
    </SafeAreaView>
  );
}

export default List;
