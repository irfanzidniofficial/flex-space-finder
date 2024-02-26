import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors, GlobalStyle} from '../../../assets';

interface InputTextProps {
  icon?: any;
  label?: string;
  placeholder?: string;
}

function InputText({icon, label, placeholder}: InputTextProps): JSX.Element {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.searchContainer}>
        {icon && <Image source={icon} style={styles.icContainer} />}
        <TextInput placeholder={placeholder} style={styles.searchInput} />
      </View>
    </>
  );
}

export default InputText;

const styles = StyleSheet.create({
  searchContainer: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.cornerXL,
    borderWidth: 1,
    borderColor: Colors.greyContainer,
    paddingHorizontal: 20,
  },
  label: {
    ...GlobalStyle.h4,
    ...GlobalStyle.textBlack,
    marginTop: 14,
    marginBottom: 4,
  },
  searchInput: {
    marginLeft: 20,
  },

  icContainer: {
    width: 24,
    height: 24,
  },
});
