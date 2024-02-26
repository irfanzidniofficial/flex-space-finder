import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const GlobalStyle = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  font400: {
    fontWeight: '400',
  },
  font600: {
    fontWeight: '600',
  },
  font700: {
    fontWeight: '700',
  },
  textBlack: {
    color: Colors.black,
  },
  textGrey: {
    color: Colors.grey,
  },
  textWhite: {
    color: Colors.white,
  },
  textPrimary: {
    color: Colors.primary,
  },
  textCenter: {
    textAlign: 'center',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 22,
    fontWeight: '700',
  },
  h2: {
    fontSize: 18,
    fontWeight: '700',
  },
  h3: {
    fontSize: 16,
    fontWeight: '700',
  },
  h4: {
    fontSize: 14,
    fontWeight: '600',
  },
  h5: {
    fontSize: 12,
    fontWeight: '600',
  },
  cornerXS: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  cornerSM: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cornerMD: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  cornerLG: {
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cornerXL: {
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
});

export default GlobalStyle;
