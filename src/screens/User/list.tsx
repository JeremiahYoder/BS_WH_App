import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

// import UserData from './data.json';

import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../services/api';
import {setUsers, setUserId} from '../../redux/User/slice';
import {RootState} from '../../redux/store';

function List({navigation}) {
  const dispatch = useDispatch();
  const {users} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    async function exec() {
      let data = await getUsers();
      if (data) {
        dispatch(setUsers(data));
      }
    }

    if (users && !users.length) {
      exec();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToDetails = useCallback(
    (id: string) => {
      dispatch(setUserId(id));
      navigation.navigate('UserDetails');
    },
    [dispatch, navigation],
  );

  const renderUser = ({item}) => {
    console.log('ITEM::', item);
    return (
      <TouchableOpacity
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
          data={users}
          renderItem={renderUser}
          style={{borderColor: 'blue', borderWidth: 1, flex: 1, width: '100%'}}
        />
      </View>
    </SafeAreaView>
  );
}

export default List;
