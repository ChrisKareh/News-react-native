import React, {useEffect, useState} from 'react';
import {getArticle} from '../utils/api';
import {useRoute} from '@react-navigation/native';
import useBackButton from '../utils/useBackButton';
import Article from '../components/article/article';

const ArticleDetailsScreen = () => {
  const [article, setArticle] = useState({});
  const route = useRoute();

  useBackButton();

  useEffect(() => {
    getArticle(route.params.id).then(response => {
      setArticle(response.data.data[0]);
    });
  }, [route.params.id]);

  return <Article article={article} />;
};
export default ArticleDetailsScreen;
