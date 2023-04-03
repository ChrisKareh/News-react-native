import {useEffect, useState} from 'react';
import {getLatest} from './api';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from './constants';

const useLatestArticles = (page = 1) => {
  const [articles, setArticles] = useState([
    {
      type: 'placeholder',
      title: '',
      image: '',
      date: '',
      category: {title: ''},
    },
  ]);

  const [firstFourCategories, setFirstFourCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onPressArticle = item => {
    navigation.navigate(screenNames.details, {id: item.id});
  };

  useEffect(() => {
    setLoading(true);
    getLatest(page)
      .then(response => {
        const categoriesToPush = [];
        setArticles(prevData => {
          response.data.data.forEach(item => {
            if (
              categoriesToPush.length < 4 &&
              categoriesToPush.findIndex(
                category => item.category.id === category.id,
              ) === -1
            ) {
              categoriesToPush.push(item.category);
            }
          });
          setFirstFourCategories(categoriesToPush);

          if (page === 1) {
            return response.data.data;
          }
          return [...prevData, response.data.data];
        });
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  }, [page]);

  return {
    articles,
    loading,
    firstFourCategories,
    onPressArticle,
  };
};
export default useLatestArticles;
