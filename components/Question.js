import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button, TouchableOpacity } from 'react-native';

export default function Question({ question, correctAnswer, choices, questionNumber, totQuestions, handleAnswers, nextQuestion }) {

  const [answer, setAnswer] = useState(null)

  const handleSelect = selected => {
    if (answer === null) {
      setAnswer(selected)
      handleAnswers(selected === correctAnswer)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.questionNumber}>
        <Text>Question</Text>
        <Text>{questionNumber + 1}/{totQuestions}</Text>
      </View>
      <View style={styles.question}>
        <Text>{question}</Text>
      </View>
      <View style={styles.choices}>
        {choices.map((choice, index) => {
          return (
            <TouchableOpacity onPress={() => handleSelect(index)} key={index} activeOpacity={0.6}>
              <View
                style={[styles.choice, (answer !== null ?
                  (index === answer ?
                    (index !== correctAnswer ?
                      styles.wrongChoice :
                      styles.rightChoice
                    ) : null) : null
                ), (answer !== null ? (index === correctAnswer ? styles.rightChoice : null) : null)]}
              >
                <Text style={styles.choiceText}>
                  {choice}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={styles.button}>
        <Button title="Continue" onPress={() => nextQuestion()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  questionNumber: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  question: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,

    elevation: 2,
    maxWidth: "95%",
    padding: 5,
    marginTop: 15,
    marginBottom: 15
  },
  choices: {
    flex: 6,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    flexWrap: "wrap",
    justifyContent: "center"
  },
  choice: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    alignSelf: "center",
    width: 300,
    maxWidth: "80%",
    backgroundColor: '#090c34',
    padding: 10,
    marginBottom: 10
  },
  rightChoice: {
    backgroundColor: '#33ca7f'
  },
  wrongChoice: {
    backgroundColor: '#fe5f55'
  },
  choiceText: {
    alignSelf: "center",
    color: "#fff",
  },
  button: {
    flex: 3,
    margin: 5,
  }
});
