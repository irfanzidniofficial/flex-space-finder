import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Colors,
  GlobalStyle,
  IcDiscover,
  IcMessage,
  IcPayment,
  IcSetting,
} from '../../../assets';

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Image source={IcDiscover} />
          <Text style={styles.tabLabel}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={IcMessage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={IcPayment} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={IcSetting} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {height: 100, paddingVertical: 30, paddingHorizontal: 54},
  tabContainer: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.justifyBetween,
  },
  activeTab: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.cornerXS,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: Colors.secondary,
  },
  tab: {
    padding: 8,
  },
  tabLabel: {
    ...GlobalStyle.font600,
    ...GlobalStyle.textPrimary,
    color: Colors.primary,
    marginLeft: 8,
  },
});
