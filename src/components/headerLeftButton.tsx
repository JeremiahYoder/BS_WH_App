import React from 'react';
import {Button} from 'react-native';

function NavigationButton() {
  return (
    <Button onPress={() => alert('Navigate Back')} title="<" color="#000" />
  );
}

export default NavigationButton;
