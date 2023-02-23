import React, {useCallback} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {linkToEmail, linkToMap, linkToPhone, linkToWeb} from '../utils';

export type LinkTypes = 'WEB' | 'PHONE' | 'EMAIL' | 'MAP';

interface IHyperlink {
  type?: LinkTypes;
  link: string;
  underline?: boolean;
  styles?: StyleProp<TextStyle>;
}

function Hyperlink({type = 'WEB', link, underline = true, styles}: IHyperlink) {
  const linkToCb = useCallback(
    (url: string) => {
      if (type === 'WEB') {
        return linkToWeb(url);
      }
      if (type === 'PHONE') {
        return linkToPhone(url);
      }
      if (type === 'EMAIL') {
        return linkToEmail(url);
      }
      if (type === 'MAP') {
        return linkToMap(url);
      }
    },
    [type],
  );

  return (
    <TouchableOpacity onPress={() => linkToCb(link)}>
      <Text
        style={[
          defaultStyles.text,
          underline ? defaultStyles.highlight : {},
          styles,
        ]}>
        {link}
      </Text>
    </TouchableOpacity>
  );
}

const defaultStyles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  highlight: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Hyperlink;
