import React from 'react';
import useLatestArticles from '../utils/useLatestArticles';
import {FlatList} from 'react-native-gesture-handler';
import NewsCard from '../components/newsCard/newsCard';

const renderItem = ({item, loading, onPressArticle}) => (
  <NewsCard item={item} showPlaceholder={loading} onPress={onPressArticle} />
);
const LatestNewsScreen = () => {
  const {loading, articles, onPressArticle} = useLatestArticles(1);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={articles}
      renderItem={({item}) => renderItem({item, loading, onPressArticle})}
    />
  );
};
export default LatestNewsScreen;
