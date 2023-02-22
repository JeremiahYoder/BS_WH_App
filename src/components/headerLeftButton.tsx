import React, {useCallback} from 'react';
import {Button} from 'react-native';

interface INavButton {
  onPress?: () => void;
}

function NavButton({onPress}: INavButton) {
  const _onPress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  return <Button onPress={_onPress} title="<" color="black" />;
}

export default NavButton;
