import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 4,
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  name: {
    fontSize: 15,
    paddingBottom: 5,
    fontFamily: 'ZenDots-Regular',
  },
  country: {
    fontSize: 12,
    fontFamily: 'ZenDots-Regular',
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  wrapperElevation: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  imageElevation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: '#fff',
    borderRadius: 10
  },
});