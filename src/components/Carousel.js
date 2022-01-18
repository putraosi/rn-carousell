import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('window');

const Carousel = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);
  const refFlatlist = useRef(null);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  }, []);

  const infiniteScroll = _dataList => {
    const numberOfData = _dataList.length;
    let scrollvalue = 0;
    let scrolled = 0;

    setInterval(() => {
      scrolled++;

      if (scrolled < numberOfData) scrollvalue = scrollvalue + width;
      else {
        scrollvalue = 0;
        scrolled = 0;
      }

      refFlatlist.current.scrollToOffset({animated: true, offset: scrollvalue});
    }, 3000);
  };

  if (data && data.length) {
    return (
      <View>
        <FlatList
          ref={refFlatlist}
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CarouselItem data={item} />}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: '#595959',
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  return <Text>{'Coming Soon!'}</Text>;
};

export default Carousel;

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
