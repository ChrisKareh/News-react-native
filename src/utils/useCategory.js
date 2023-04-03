import {useEffect, useState} from 'react';
import {getArticlesByCategory} from './api';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from './constants';

const useCategory = category => {
  const [articles, setArticles] = useState([
    {
      type: 'placeholder',
      title: '',
      image: '',
      date: '',
      category: {title: '', id: -1},
    },
  ]);

  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const onPressArticle = item => {
    navigation.navigate(screenNames.details, {id: item.id});
  };

  useEffect(() => {
    setLoading(true);
    getArticlesByCategory(category)
      .then(response => {
        setArticles(response.data.data);
        setLoading(false);
      })

      .catch(e => {
        console.log(e);
      });
  }, [category]);

  return {
    articles,
    loading,
    onPressArticle,
  };
};
export default useCategory;
