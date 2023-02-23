import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  DEBUG_STYLE: {borderColor: 'red', borderWidth: 1},
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowButton: {
    borderColor: 'red',
    borderWidth: 1,
  },
  rowContainer: {
    padding: 10,
    marginLeft: 15,
  },
  listStyle: {
    borderColor: 'blue',
    borderWidth: 1,
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  detailsScreen: {
    justifyContent: 'flex-start',
  },
  detailsContainer: {
    width: '100%',
    borderColor: 'blue',
    borderWidth: 1,
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
  websiteWrapper: {
    flexDirection: 'row',
  },
});
