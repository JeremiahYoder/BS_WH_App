/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import useUser from '../../redux/User/useUser';

function List({navigation}) {
  const {users, fetchUsers, setCurrentUserId} = useUser();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToDetails = useCallback(
    (id: string) => {
      setCurrentUserId(id);
      navigation.navigate('UserDetails');
    },
    [setCurrentUserId, navigation],
  );

  const renderUser = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => goToDetails(item.id)}
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
          keyExtractor={item => item.id}
          data={Object.values(users)}
          renderItem={renderUser}
          style={{borderColor: 'blue', borderWidth: 1, flex: 1, width: '100%'}}
        />
      </View>
    </SafeAreaView>
  );
}

export default List;
