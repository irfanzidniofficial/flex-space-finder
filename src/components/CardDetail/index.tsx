import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, GlobalStyle, IcStarYellow, ItemSecondA} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../App';

const CardDetail = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image source={ItemSecondA} style={styles.thumbnail} />
        <View>
          <Text style={[GlobalStyle.h2, GlobalStyle.textBlack]}>
            Collabox Space
          </Text>
          <View style={[GlobalStyle.flexRow, GlobalStyle.itemsCenter]}>
            <Image source={IcStarYellow} style={styles.icon} />
            <Text style={[GlobalStyle.h5, GlobalStyle.textBlack]}>4.5/5</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={[GlobalStyle.h4, GlobalStyle.textPrimary]}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.justifyBetween,
    ...GlobalStyle.cornerLG,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 24,
    borderWidth: 1,
    borderColor: Colors.greyContainer,
  },
  leftContent: {...GlobalStyle.flexRow, ...GlobalStyle.itemsCenter},
  thumbnail: {
    ...GlobalStyle.cornerSM,
    width: 70,
    height: 70,
    marginRight: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
});
