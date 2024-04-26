import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBlockColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
