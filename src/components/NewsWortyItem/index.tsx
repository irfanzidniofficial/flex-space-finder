import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Colors,
  GlobalStyle,
  IcArrowRightWhite,
  ItemSecondA,
} from '../../../assets';

interface NewsWorthyItemProps {
  title?: string;
  address?: string;
  price?: string;
  image?: any;
  onPress?: () => void;
}

const NewsWortyItem = ({
  title,
  address,
  price,
  image,
  onPress,
}: NewsWorthyItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageBackgorund} />
      <View style={styles.contentContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price} </Text>
        </View>
        <View>
          <Text style={[GlobalStyle.textWhite, GlobalStyle.h2]}>{title}</Text>
          <Text style={[GlobalStyle.font400, GlobalStyle.textWhite]}>
            {address}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress && onPress();
        }}>
        <Image source={IcArrowRightWhite} />
      </TouchableOpacity>
    </View>
  );
};

export default NewsWortyItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 40,
    marginBottom: 24,
  },
  imageBackgorund: {
    ...GlobalStyle.cornerXL,
    width: 240,
    height: 320,
    position: 'relative',
  },
  contentContainer: {
    ...GlobalStyle.justifyBetween,
    ...GlobalStyle.cornerXL,
    backgroundColor: Colors.transparentBlack,
    position: 'absolute',
    width: 240,
    height: 320,
    padding: 20,
  },
  priceContainer: {
    ...GlobalStyle.cornerXS,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: Colors.secondary,
    alignSelf: 'flex-end',
  },
  price: {...GlobalStyle.textPrimary, ...GlobalStyle.font600},
  button: {
    ...GlobalStyle.justifyCenter,
    ...GlobalStyle.itemsCenter,
    position: 'absolute',
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 40,
    zIndex: 2,
    bottom: 24,
    right: -20,
  },
});
