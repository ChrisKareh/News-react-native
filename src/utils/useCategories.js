import {useEffect, useState} from 'react';
import {getCategories} from './api';
import {useNavigation, useRoute} from '@react-navigation/native';
import {screenNames} from './constants';

const useCategories = isHome => {
  const route = useRoute();
  const [selected, setSelected] = useState(route.params?.id || -1);
  const [categories, setCategories] = useState([
    {
      id: -1,
      title: 'الصفحة الرئسية',
    },
  ]);

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onPressCategory = item => {
    setSelected(item.id);
    if (item.id === -1 || !isHome) {
      return;
    }
    navigation.navigate(screenNames.category, {id: item.id});
  };

  useEffect(() => {
    if (!isHome) {
      if (selected === -1) {
        navigation.goBack();
      } else {
        navigation.setParams({id: selected});
      }
    }
  }, [isHome, navigation, selected]);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then(response => {
        setCategories([
          {
            id: -1,
            title: 'الصفحة الرئسية',
          },

          ...response.data.data,
        ]);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return {
    categories,
    loading,
    onPressCategory,
    selected,
  };
};
export default useCategories;
