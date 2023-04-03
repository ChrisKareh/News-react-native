import {View, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../appText/AppText';
import styles from './SliderItem.style';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {getFormattedDate} from '../../utils/common';
import CategoryBadge from '../categoryBadge/categoryBadge';
import {placeholder} from '../../utils/constants';

const SliderItem = ({item, showPlaceholder, onPress}) =>
  showPlaceholder ? (
    <SkeletonPlaceholder>
      <View style={styles.container} />
    </SkeletonPlaceholder>
  ) : (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress(item);
      }}>
      <View style={styles.container}>
        <FastImage
          source={{
            uri: item.image || placeholder,
          }}
          style={styles.image}
        />
        <LinearGradient colors={['#0008', '#0000']} style={styles.topContainer}>
          <View style={styles.topLeftContainer}>
            <Image
              source={require('../../assets/clock.png')}
              style={styles.icon}
            />

            <AppText style={styles.dateText} bold>
              {getFormattedDate(item.date)}
            </AppText>
          </View>
          <CategoryBadge category={item.category.title} inverted height={5} />
        </LinearGradient>
        <LinearGradient
          colors={['#0000', '#0008']}
          style={styles.bottomContainer}>
          <AppText style={styles.title} bold numberOfLines={3}>
            {item.title}
          </AppText>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
export default SliderItem;
