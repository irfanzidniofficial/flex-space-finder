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
  IcMasterCard,
  IcPay,
  IcPayment,
  IcWallet,
} from '../../../assets';
import {CardDetail, Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../../App';
import {StackNavigationProp} from '@react-navigation/stack';

function Checkout(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const checkoutData = [
    {label: 'Price per day', value: '$500', isBold: true},
    {label: 'Total days', value: '18 days', isBold: false},
    {label: 'Date', value: '27 Februari 2024', isBold: false},
    {label: 'End', value: '16 Maret 2024', isBold: false},
    {label: 'Tax 11%', value: '$890', isBold: true},
    {label: 'Insurance', value: '$20,000', isBold: true},
    {label: 'Grand Total', value: '$2,899,000', isBold: true, isPrimary: true},
  ];

  const borderBottom = {
    borderBottomWidth: 1,
    borderColor: Colors.greyContainer,
  };
  const renderCheckoutDetail = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  const renderCheckoutData = () => {
    return (
      <View style={styles.section}>
        {checkoutData.map((val, idx) => {
          const isLast = idx === checkoutData?.length - 1;
          return (
            <View
              key={idx}
              style={[styles.checkoutItem, !isLast && borderBottom]}>
              <Text style={GlobalStyle.textBlack}>{val.label}</Text>
              <Text
                style={[
                  GlobalStyle.textBlack,
                  val.isBold && GlobalStyle.font700,
                  val.isPrimary && GlobalStyle.textPrimary,
                ]}>
                {val.value}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <View style={styles.paymentContainer}>
          <TouchableOpacity style={styles.paymentButton}>
            <Image source={IcWallet} />
            <Text style={[GlobalStyle.textBlack, GlobalStyle.h5]}>
              MyWallet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton}>
            <Image source={IcMasterCard} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderPayNow = () => {
    return (
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('Success')}>
          <Text style={[GlobalStyle.textWhite, GlobalStyle.h4]}>Pay Now</Text>
          <Image source={IcPay} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        showRightButton={false}
        title="Chcekout"
        subTitle="Ready to start working?"
      />
      <View style={styles.content}>
        <ScrollView>
          {renderCheckoutDetail()}
          {renderCheckoutData()}
          {renderPaymentMethod()}
        </ScrollView>
        {renderPayNow()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    ...GlobalStyle.justifyBetween,
  },
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
  checkoutItem: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.justifyBetween,
    paddingVertical: 14,
  },
  paymentContainer: {
    ...GlobalStyle.flexRow,
    marginHorizontal: -10,
    marginBottom: 30,
  },
  paymentButton: {
    ...GlobalStyle.justifyCenter,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.cornerLG,
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: Colors.greyContainer,
    marginHorizontal: 14,
  },
  proceedButton: {
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
});

export default Checkout;
