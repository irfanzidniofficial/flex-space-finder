import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function Booking(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Booking Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Booking;
