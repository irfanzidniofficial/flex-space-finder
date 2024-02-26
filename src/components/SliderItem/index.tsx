import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../assets';

interface SliderItemProps {
  image: any;
}

const SliderItem = ({image}: SliderItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.ImageBackground} />
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 40,
    marginBottom: 24,
  },
  ImageBackground: {...GlobalStyle.cornerXL, width: 240, height: 320},
});
