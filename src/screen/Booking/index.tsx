import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Colors,
  GlobalStyle,
  IcArrowRightWhite,
  IcCalendar,
  IcDays,
  IcPhone,
  IcUser,
} from '../../../assets';
import {CardDetail, Header, InputText} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../../App';
import {StackNavigationProp} from '@react-navigation/stack';

function Booking(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const forms = [
    {
      label: 'Total days',
      placeholder: 'Total days',
      icon: IcDays,
    },
    {
      label: 'Date start at',
      placeholder: 'Date start at',
      icon: IcCalendar,
    },
    {
      label: 'Complete name',
      placeholder: 'Complete name',
      icon: IcUser,
    },
    {
      label: 'Phone number',
      placeholder: 'Phone number',
      icon: IcPhone,
    },
  ];
  const renderBookingDetail = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  const renderBookingInformation = () => {
    return (
      <View style={styles.section}>
        <Text style={[GlobalStyle.h3, GlobalStyle.textBlack]}>
          Booking Information
        </Text>
        <Text style={GlobalStyle.textGrey}>
          Lorem ensure data valid cant change
        </Text>
        {forms.map((val, idx) => {
          return (
            <InputText
              key={idx}
              label={val.label}
              placeholder={val.placeholder}
              icon={val.icon}
            />
          );
        })}
      </View>
    );
  };

  const renderProccedPayment = () => {
    return (
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.proccedButton}
          onPress={() => navigation.navigate('Checkout')}>
          <Text style={[GlobalStyle.textWhite, GlobalStyle.h4]}>
            Proceed to Payment
          </Text>
          <Image source={IcArrowRightWhite} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.termConditionButton}>
          <Text>Read Terms & All Conditions</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        showRightButton={false}
        title="Booking"
        subTitle="Space available for today "
      />
      <View>
        <ScrollView>
          {renderBookingDetail()}
          {renderBookingInformation()}
        </ScrollView>
        {renderProccedPayment()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  section: {paddingHorizontal: 24, marginBottom: 24},
  sectionTitle: {
    ...GlobalStyle.h3,
    ...GlobalStyle.textBlack,
    marginBottom: 12,
  },
  proccedButton: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.justifyCenter,
    ...GlobalStyle.cornerMD,
    backgroundColor: Colors.primary,
    padding: 14,
  },
  icon: {
    marginLeft: 4,
  },
  termConditionButton: {
    ...GlobalStyle.itemsCenter,
    padding: 14,
    ...GlobalStyle.justifyCenter,
  },
});

export default Booking;
