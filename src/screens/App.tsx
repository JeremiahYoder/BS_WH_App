import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import UserList from './User/list';
import UserDetails from './User/details';

// import NavButton from '../components/headerLeftButton';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{title: 'User List'}}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{title: 'User Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
