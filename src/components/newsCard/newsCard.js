import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import AppText from '../appText/AppText';
import styles from './newsCard.style';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {getFormattedDate} from '../../utils/common';
import CategoryBadge from '../categoryBadge/categoryBadge';
import PropTypes from 'prop-types';
import {Image} from 'react-native-animatable';
import {placeholder} from '../../utils/constants';

const NewsCard = ({item, showPlaceholder, onPress, isGroup, fullScreen}) =>
  showPlaceholder ? (
    <SkeletonPlaceholder>
      <View style={styles.container} />
    </SkeletonPlaceholder>
  ) : (
    <TouchableOpacity
      onPress={() => {
        onPress(item);
      }}>
      <View style={styles.container(isGroup, fullScreen)}>
        {item.image || isGroup ? (
          <View style={styles.imageContainer(isGroup)}>
            <FastImage
              style={styles.image}
              source={{uri: item.image || placeholder}}
              resizeMode="cover"
            />
          </View>
        ) : null}
        <View style={styles.fractionContainer(item.image, isGroup)}>
          {isGroup ? (
            <>
              <View style={styles.infoContainer}>
                <CategoryBadge category={item.category.title} bold width={5} />
                <AppText style={styles.date(isGroup)}>
                  {getFormattedDate(item.date)}
                </AppText>
                <Image
                  source={require('../../assets/clock.png')}
                  style={styles.icon}
                />
              </View>
              <AppText bold numberOfLines={2} style={styles.title}>
                {item.title}
              </AppText>
            </>
          ) : (
            <>
              <AppText bold numberOfLines={2} style={styles.title}>
                {item.title}
              </AppText>
              <View style={styles.infoContainer}>
                <CategoryBadge category={item.category.title} bold width={5} />
                <AppText style={styles.date}>
                  {getFormattedDate(item.date)}
                </AppText>
              </View>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

NewsCard.propTypes = {
  isGroup: PropTypes.bool,
  fullScreen: PropTypes.bool,
};
NewsCard.defaultProps = {
  type: 'false',
  fullScreen: false,
};

export default NewsCard;
