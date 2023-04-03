import {View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './slider.style';
import {FlatListIndicator} from '@fanchenbao/react-native-scroll-indicator';
import SliderItem from '../sliderItem/SliderItem';
import {screenWidth} from '../../utils/constants';

const renderItem = ({item, loading, onPressItem}) => {
  return (
    <View>
      <SliderItem item={item} showPlaceholder={loading} onPress={onPressItem} />
      <View style={styles.sliderIndicatorBackground} />
    </View>
  );
};

let autoSlideInterval;

const Slider = ({data, loading, onPressItem}) => {
  const sliderRef = useRef();
  const currentSlide = useRef(0);
  useEffect(() => {
    if (data.length < 2) {
      clearInterval(autoSlideInterval);
      return;
    }
    autoSlideInterval = setInterval(() => {
      if (currentSlide.current === data.length - 1) {
        currentSlide.current = 0;
      } else {
        currentSlide.current += 1;
      }
      sliderRef.current.scrollToIndex({
        index: currentSlide.current,
        animated: true,
      });
    }, 5000);
    return () => clearInterval(autoSlideInterval);
  }, [data.length]);

  return (
    <View>
      <FlatListIndicator
        flatListProps={{
          ref: sliderRef,
          data: data,
          snapToAlignment: 'start',
          decelerationRate: 'fast',
          snapToInterval: screenWidth,
          renderItem: ({item}) => renderItem({item, loading, onPressItem}),
          onScrollBeginDrag: () => {
            clearInterval(autoSlideInterval);
          },
          onMomentumScrollEnd: e => {
            clearInterval(autoSlideInterval);
            if (data.length < 2) {
              return;
            }
            const currentSlideIndex = Math.round(
              Math.round(e.nativeEvent.contentOffset.x) /
                Math.round(e.nativeEvent.layoutMeasurement.width),
            );

            autoSlideInterval = setInterval(() => {
              if (currentSlideIndex === data.length - 1) {
                currentSlide.current = 0;
              } else {
                currentSlide.current = currentSlideIndex + 1;
              }
              sliderRef.current.scrollToIndex({
                index: currentSlide.current,
                animated: true,
              });
            }, 5000);
          },
        }}
        position="bottom"
        indicatorStyle="white"
        horizontal
        indStyle={styles.indicatorStyle}
      />
    </View>
  );
};
export default Slider;
