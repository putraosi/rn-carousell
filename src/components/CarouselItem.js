import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({data}) => {
  return (
    <TouchableOpacity
      style={styles.cardView}
      onPress={() => ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT)}>
      <Image style={styles.image} source={{uri: data.url}} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{data.title}</Text>
        <Text style={styles.itemDescription}>{data.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textView: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    margin: 10,
  },

  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },

  itemTitle: {
    color: '#ffffff',
    fontSize: 22,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  itemDescription: {
    color: '#ffffff',
    fontSize: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
