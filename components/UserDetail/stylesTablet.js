import { StyleSheet } from 'react-native';

const stylesTablet = StyleSheet.create({
  main: {
    flex: 2,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  userPhoto: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  userPhotoWrapper: {
    width: 300,
    height: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 40,
  },
  userDetailsTable: {
    margin: 30,
    padding: 0,
    width: 400,
  },
  userDetailsTitle: {
    flex: 2,
    fontSize: 100,
  },
  userDetailsTitleTextStyle: {
    fontSize: 13,
    fontFamily: 'ZenDots-Regular',
  },
  userDetailsContent: {
    flex: 5,
  },
  userDetailsContentTextStyle: {
    fontSize: 13,
    fontFamily: 'ZenDots-Regular',
    color: 'black'
  },
});

export default stylesTablet;
