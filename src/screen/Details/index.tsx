import React from 'react';

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, SliderItem} from '../../components';
import {
  Colors,
  GlobalStyle,
  IcArrowRightWhite,
  IcStarYellow,
  IcVerifiedOrange,
  ItemSecondA,
  ItemSecondB,
  ItemSecondC,
  ProfileSecond,
} from '../../../assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../../App';
import {useNavigation} from '@react-navigation/native';

function Details(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const slider = [ItemSecondA, ItemSecondB, ItemSecondC];

  const renderSlider = () => {
    return (
      <FlatList
        style={styles.sliderContainer}
        data={slider}
        keyExtractor={({index}) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <SliderItem image={item} />}
      />
    );
  };

  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <View>
          <Text style={[GlobalStyle.textBlack, GlobalStyle.h1]}>
            Collabox Space
          </Text>
          <Text style={GlobalStyle.textGrey}>Jl. Indraprasta No. 10</Text>
        </View>
        <View style={GlobalStyle.flexRow}>
          <Image source={IcStarYellow} />
          <Text style={[GlobalStyle.h3, GlobalStyle.textBlack]}>4.5/5</Text>
        </View>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>About</Text>
        <Text style={GlobalStyle.textGrey}>
          Lorem space curated dolor si amet deep work without distraction from
          any edge si solor. Fiesto si fast charging club and go-getter Internet
          zonn absurb prixomoti anneheil available today.
        </Text>
      </View>
    );
  };

  const renderOwner = () => {
    return (
      <View style={styles.ownerContainer}>
        <Text style={styles.title}>Space Owner</Text>
        <View style={[GlobalStyle.flexRow, GlobalStyle.itemsCenter]}>
          <Image source={ProfileSecond} style={styles.ownerImage} />
          <View>
            <View style={GlobalStyle.flexRow}>
              <Text>John Doe</Text>
              <Image source={IcVerifiedOrange} style={styles.icon} />
            </View>
            <Text style={[GlobalStyle.font700, GlobalStyle.textBlack]}>
              @johndoe
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBookingButton = () => {
    return (
      <View style={styles.bookingButtonContainer}>
        <View>
          <Text style={[GlobalStyle.h1, GlobalStyle.textPrimary]}>$5,899</Text>
          <Text style={GlobalStyle.textGrey}>/day</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Booking');
          }}>
          <Text style={[GlobalStyle.textWhite, GlobalStyle.h3]}>
            Start Booking
          </Text>
          <Image source={IcArrowRightWhite} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        showRightButton={true}
        title="Office Details"
        subTitle="Space available for today "
      />
      <ScrollView>
        {renderSlider()}
        {renderTitle()}
        {renderDescription()}
        {renderOwner()}
      </ScrollView>
      {renderBookingButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  sliderContainer: {
    paddingHorizontal: 24,
  },
  titleContainer: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.justifyBetween,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  title: {
    marginBottom: 10,
    ...GlobalStyle.h3,
    ...GlobalStyle.textBlack,
  },
  descriptionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  ownerContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  ownerImage: {
    marginRight: 12,
  },
  icon: {marginLeft: 8},
  bookingButtonContainer: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.justifyBetween,

    padding: 24,
  },
  button: {
    ...GlobalStyle.flexRow,
    paddingHorizontal: 24,
    paddingVertical: 14,
    ...GlobalStyle.cornerMD,
    backgroundColor: Colors.primary,
  },
});

export default Details;
