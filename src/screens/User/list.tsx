import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import UserData from './data.json';

function List({navigation}) {
  const renderUser = ({item}) => {
    console.log('ITEM::', item);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('UserDetails', {id: item.id})}
        style={{borderColor: 'red', borderWidth: 1, flex: 1}}>
        <View style={{padding: 10, marginLeft: 15}}>
          <Text style={[styles.text, styles.bold]}>{item.name}</Text>
          <Text style={[styles.text]}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <FlatList
          data={UserData}
          renderItem={renderUser}
          style={{borderColor: 'blue', borderWidth: 1, flex: 1, width: '100%'}}
        />
      </View>
    </SafeAreaView>
  );
}

export default List;
