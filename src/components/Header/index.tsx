import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GlobalStyle, IcArrowLefBlack, IcMenu} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../App';

interface HeaderProps {
  title?: string;
  subTitle?: string;
  showRightButton: boolean;
}

const Header = ({title, subTitle, showRightButton}: HeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={IcArrowLefBlack} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <TouchableOpacity>
        {showRightButton && <Image source={IcMenu} />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.justifyBetween,
    padding: 24,
  },
  button: {},
  title: {
    ...GlobalStyle.h1,
    ...GlobalStyle.textCenter,
    ...GlobalStyle.textBlack,
  },
  subTitle: {
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.textGrey,
  },
});
