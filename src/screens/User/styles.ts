import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  DEBUG_STYLE: {borderColor: 'red', borderWidth: 1},
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  detailSection: {
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 5,
  },
});
