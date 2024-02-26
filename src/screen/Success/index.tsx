import React from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Colors,
  GlobalStyle,
  IcArrowRightWhite,
  IcStarWhite,
  ItemFirstA,
} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../../App';
import {StackNavigationProp} from '@react-navigation/stack';

function Success(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <View>
        <Image source={ItemFirstA} style={styles.image} />
        <View style={styles.overlay}>
          <View style={styles.rating}>
            <Image source={IcStarWhite} />
            <Text style={[GlobalStyle.h5, GlobalStyle.textWhite]}>4.5/5</Text>
          </View>
          <View style={styles.booked}>
            <Text style={[GlobalStyle.h5, GlobalStyle.textWhite]}>Booked</Text>
          </View>
          <View style={styles.label}>
            <Text style={[GlobalStyle.h2, GlobalStyle.textWhite]}>
              Collabox Space
            </Text>
            <Text style={[GlobalStyle.textWhite]}>Jl. Indraprasta No. 10 </Text>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={[GlobalStyle.h1, GlobalStyle.textBlack]}>
          Success Booking
        </Text>
        <Text style={[GlobalStyle.textCenter, GlobalStyle.textGrey]}>
          Your space is ready to use for your growing business and life
        </Text>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('Details')}>
        <Text style={[GlobalStyle.h4, GlobalStyle.textWhite]}>
          View Details
        </Text>
        <Image source={IcArrowRightWhite} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.justifyCenter,
    flex: 1,
  },
  image: {
    ...GlobalStyle.cornerXL,
    width: 240,
    height: 320,
  },
  overlay: {
    ...GlobalStyle.cornerXL,
    width: 240,
    height: 320,
    backgroundColor: Colors.transparentBlack,
    position: 'absolute',
  },
  rating: {
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.justifyCenter,
    ...GlobalStyle.cornerLG,
    backgroundColor: Colors.primary,
    padding: 14,
    width: 60,
    height: 60,
    position: 'absolute',
    right: -30,
    top: 30,
  },
  booked: {
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.justifyCenter,
    ...GlobalStyle.cornerLG,
    backgroundColor: Colors.primary,
    padding: 8,
    width: 100,
    height: 40,
    position: 'absolute',
    left: -50,
    bottom: 120,
  },
  label: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  textContainer: {
    ...GlobalStyle.itemsCenter,
    paddingHorizontal: 76,
    marginVertical: 30,
  },
  icon: {marginLeft: 4},
  detailButton: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.textCenter,
    ...GlobalStyle.justifyCenter,
    ...GlobalStyle.cornerMD,
    padding: 14,
    backgroundColor: Colors.primary,
  },
});

export default Success;
