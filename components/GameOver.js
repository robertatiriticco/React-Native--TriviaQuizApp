import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './CustomButton'

export default function GameOver({ score, playAgain }) {

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>GAME OVER!</Text>
        <Text style={styles.text}>Your score is:</Text>
        <Text style={styles.text}>{score}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <CustomButton onPress={playAgain} text="Play again!" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  buttonContainer: {
    flex: 1,
  },
});
