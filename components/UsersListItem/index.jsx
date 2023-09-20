import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const UsersListItem = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  borderColor,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, styles.wrapperElevation, { backgroundColor }, { borderColor }]}>
    <View style={styles.imageElevation}>
      <Image source={{ uri: `${item.image}` }} style={[styles.img]} />
    </View>
    <View style={[styles.info]}>
      <Text style={[styles.name, { color: textColor }]}>
        {item.firstName + ' ' + item.lastName + ' ' + item.maidenName}
      </Text>
      <Text style={[styles.country, { color: textColor }]}>
        {item.address.city}
      </Text>
    </View>
  </TouchableOpacity>
);
