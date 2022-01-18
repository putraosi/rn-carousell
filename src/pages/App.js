import React from 'react';
import {StyleSheet, View} from 'react-native';
import Carousel from '../components/Carousel';
import {DataDummy} from '../data/Data';

const App = () => {
  return (
    <View style={styles.container}>
      <Carousel data={DataDummy} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
