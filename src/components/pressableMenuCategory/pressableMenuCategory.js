import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../appText/AppText';
import styles from './pressableMenuCategory.style';

const PressableMenuCategory = ({item, onPressCategory, selected}) => (
  <TouchableOpacity
    onPress={() => {
      onPressCategory(item);
    }}>
    <View style={styles.container(selected)}>
      <AppText style={styles.item}>{item.title}</AppText>
    </View>
  </TouchableOpacity>
);
export default PressableMenuCategory;
