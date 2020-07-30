import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button } from 'react-native';

export default function GameOver({ score, playAgain }) {

  return (
    <View style={styles.container}>
      <Text>GAME OVER!</Text>
      <Text>Your score is:</Text>
      <Text>{score}</Text>
      <Button onPress={() => playAgain()} title="Play again!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
