import React, {useCallback} from 'react';
import {Button} from 'react-native';

function NavigationButton({onPress}) {
  const _onPress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  return <Button onPress={_onPress} title="<" color="black" />;
}

export default NavigationButton;
