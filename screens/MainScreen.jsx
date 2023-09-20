import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import data from '../assets/data/data.json';
import UsersList from '../components/UsersList';
import UserDetail from '../components/UserDetail';
import { isTablet } from '../utils/Device';

const MainScreen = ({ route, navigation }) => {
  const [isLandscape, setIsLandscape] = useState(false);
  const [itemId, setItemId] = useState(1);
  const usersData = data.users;

  const determineOrientation = () => {
    const { width, height } = Dimensions.get('window');
    if (width > height) {
      setIsLandscape(true);
    } else {
      setIsLandscape(false);
    }
  };

  const renderUsersList = () => {
    return (
      <UsersList
        data={usersData}
        itemId={itemId}
        setItemId={setItemId}
        navigation={navigation}
        isLandscape={isLandscape}
      />
    );
  };

  const renderDetail = () => {
    if (isTablet() && isLandscape) {
      const userData = usersData.filter(item => item.id === itemId);
      return <UserDetail contact={userData[0]} />;
    }
  };

  return (
    <SafeAreaView
      style={styles.container}
      onLayout={() => determineOrientation()}>
      <View style={styles.content}>
        {renderUsersList()}
        {renderDetail()}
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});
