import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Content from '../localization/en.json';

import UserList from './User/list';
import UserDetails from './User/details';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{title: Content.listTitle}}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{title: Content.detailsTitle}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
