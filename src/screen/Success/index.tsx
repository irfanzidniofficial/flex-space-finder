import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function Success(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello Word</Text>
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

export default Success;
