import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import useUser from '../../redux/User/useUser';
import styles from './styles';

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
        style={styles.rowButton}>
        <View style={styles.rowContainer}>
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
          style={styles.listStyle}
          contentContainerStyle={styles.listContainerStyle}
          ItemSeparatorComponent={() => (
            <View style={styles.listSeparatorStyle} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default List;
