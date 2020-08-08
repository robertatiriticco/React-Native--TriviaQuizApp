import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function CustomButton({ onPress, text }) {

  return (
    <TouchableHighlight activeOpacity={0.4} underlayColor="#2184AB" style={styles.button} onPress={() => onPress()} >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: "#1c7293",
    borderRadius: 6
  },
  buttonText: {
    color: "#21295c",
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});
