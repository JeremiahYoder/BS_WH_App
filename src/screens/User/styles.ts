import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  DEBUG_STYLE: {borderColor: 'red', borderWidth: 1},
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowButton: {},
  rowContainer: {
    padding: 10,
    marginLeft: 15,
  },
  listStyle: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    flex: 1,
    width: '100%',
  },
  listContainerStyle: {
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  listSeparatorStyle: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    height: 1,
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
  detailSectionAlignment: {
    alignItems: 'flex-start',
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
