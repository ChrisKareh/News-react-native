/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Slider from '../components/slider/slider';
import {FlatList} from 'react-native-gesture-handler';
import useLatestArticles from '../utils/useLatestArticles';
import {View} from 'react-native';
import colors from '../utils/colors';
import NewsCard from '../components/newsCard/newsCard';
import AppText from '../components/appText/AppText';
import {moderateVerticalScale} from 'react-native-size-matters';

const renderItem = ({category, items, loading, onPressArticle}) => (
  <View style={{paddingTop: moderateVerticalScale(10)}}>
    <AppText
      bold
      style={{
        color: colors.white,
        paddingBottom: moderateVerticalScale(10),
        marginHorizontal: moderateVerticalScale(10),
      }}>
      {category?.title}
    </AppText>
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: items.length > 1 ? 'space-evenly' : 'flex-end',
        paddingHorizontal: moderateVerticalScale(items.length > 1 ? 0 : 5),
        paddingVertical: moderateVerticalScale(10),
        backgroundColor: colors.white,
      }}>
      {items.length >= 1 && (
        <NewsCard
          type="double"
          item={items[0]}
          showPlaceholder={loading}
          onPress={onPressArticle}
          isGroup
        />
      )}
      {items.length === 2 && (
        <NewsCard
          item={items[1]}
          showPlaceholder={loading}
          onPress={onPressArticle}
          isGroup
        />
      )}
    </View>
  </View>
);

const RenderHeader = ({data, loading, onPressArticle}) => (
  <Slider data={data} loading={loading} onPressItem={onPressArticle} />
);

// const items = {}

const getFirstTwoItemsForCategory = (id, items) => {
  const firstTwoItems = [];
  items.forEach(item => {
    if (item.category.id === id && firstTwoItems.length < 2) {
      firstTwoItems.push(item);
    }
  });
  return firstTwoItems;
};

const HomeScreen = () => {
  const {loading, articles, firstFourCategories, onPressArticle} =
    useLatestArticles(1);

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={firstFourCategories}
        ListHeaderComponent={() =>
          RenderHeader({data: articles.slice(0, 4), loading, onPressArticle})
        }
        renderItem={({item}) =>
          renderItem({
            category: item,
            items: getFirstTwoItemsForCategory(item.id, articles),
            loading,
            onPressArticle,
          })
        }
      />
    </View>
  );
};
export default HomeScreen;
