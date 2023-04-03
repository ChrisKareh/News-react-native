import {View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native-animatable';
import AppText from '../appText/AppText';
import {getFormattedDate} from '../../utils/common';
import CategoryBadge from '../categoryBadge/categoryBadge';
import styles from './article.style';
import {placeholder} from '../../utils/constants';

const Article = ({article}) => (
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <FastImage
      source={{uri: article?.image || placeholder}}
      style={styles.image}
    />
    <View style={styles.bodyContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.dateContainer}>
          <AppText style={styles.date}>
            {article?.date ? getFormattedDate(article.date) : '12-12-19'}
          </AppText>

          <Image
            style={styles.share}
            resizeMode="contain"
            source={require('../../assets/share.png')}
          />
        </View>
        <View style={styles.zoomContainer}>
          <View style={styles.zoomButtonContainer}>
            <Image
              style={styles.zoomButton}
              resizeMode="contain"
              source={require('../../assets/minus.png')}
            />
          </View>
          <View style={styles.zoomButtonContainer}>
            <Image
              style={styles.zoomButton}
              resizeMode="contain"
              source={require('../../assets/plus.png')}
            />
          </View>
        </View>
        <CategoryBadge category={article?.category?.title} />
      </View>
      <View style={styles.separator} />
      <AppText bold style={styles.title}>
        {article?.title}
      </AppText>
      <AppText style={styles.content}>{article?.content}</AppText>
    </View>
  </ScrollView>
);
export default Article;
