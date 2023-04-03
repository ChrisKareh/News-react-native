import {View, FlatList} from 'react-native';
import React from 'react';
import useCategories from '../../utils/useCategories';
import styles from './menu.style';
import PressableMenuCategory from '../pressableMenuCategory/pressableMenuCategory';

const renderItem = ({item, onPressCategory, selected}) => (
  <PressableMenuCategory
    item={item}
    onPressCategory={onPressCategory}
    selected={selected}
  />
);

const Menu = ({isHome}) => {
  const {categories, onPressCategory, selected} = useCategories(isHome);
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) =>
          renderItem({item, onPressCategory, selected: item.id === selected})
        }
      />
    </View>
  );
};
export default Menu;
