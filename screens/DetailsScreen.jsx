import * as React from 'react';
import data from '../assets/data/data.json';
import UserDetail from '../components/UserDetail';

function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;  
  if (itemId === undefined) navigation.navigate('HomeScreen');
  const userData = data.users.filter(item => item.id === itemId);
  return <UserDetail contact={userData[0]} />;  
}

export default DetailsScreen;
