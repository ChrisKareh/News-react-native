/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import useBackButton from '../utils/useBackButton';
import {moderateVerticalScale} from 'react-native-size-matters';
import colors from '../utils/colors';
import {FlatList} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import useCategory from '../utils/useCategory';
import Slider from '../components/slider/slider';
import NewsCard from '../components/newsCard/newsCard';
import withSideMenu from '../utils/withSideMenu';

const ListWithMenu = withSideMenu(FlatList, false);

const renderHeader = ({data, loading, onPressArticle}) => (
  <Slider data={[data]} loading={loading} onPressItem={onPressArticle} />
);

const renderItem = ({item, loading, onPressArticle}) => (
  <NewsCard
    item={item}
    showPlaceholder={loading}
    onPress={onPressArticle}
    isGroup
    fullScreen
  />
);

const CategoryScreen = () => {
  const route = useRoute();
  useBackButton();
  const {loading, articles, onPressArticle} = useCategory(route.params.id);
  console.log(articles[0]);
  return (
    <View style={{flex: 1, backgroundColor: colors.light_grey, zIndex: 1}}>
      <ListWithMenu
        showsVerticalScrollIndicator={false}
        data={articles.slice(1, articles.length)}
        style={{backgroundColor: colors.light_grey}}
        ListHeaderComponent={() =>
          renderHeader({data: articles[0], loading, onPressArticle})
        }
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: moderateVerticalScale(5),
        }}
        renderItem={({item}) =>
          renderItem({
            item,
            loading,
            onPressArticle,
          })
        }
      />
    </View>
  );
};
export default CategoryScreen;
