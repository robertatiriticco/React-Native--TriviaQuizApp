import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Animated, Easing } from 'react-native';
import CustomButton from './CustomButton'

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
        <Text style={styles.questionNumberText}>Question {questionNumber + 1}/{totQuestions}</Text>
      </View>
      <View style={styles.question}>
        <Text style={styles.questionText}>{question}</Text>
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
      <View style={styles.buttonContainer}>
        <CustomButton onPress={nextQuestion} text="Next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  questionNumber: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  questionNumberText: {
    color: "#9eb3c2",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  question: {
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row",
    borderColor: "#1c7293",
    borderWidth: 2,
    backgroundColor: "#21295c",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 2,
    minWidth: "90%",
    maxWidth: "90%",
    padding: 20,
    marginTop: 15,
    marginBottom: 15
  },
  questionText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24
  },
  choices: {
    flex: 3,
    flexDirection: "column",
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
    minWidth: "90%",
    maxWidth: "90%",
    backgroundColor: '#090c34',
    borderColor: "#1c7293",
    borderWidth: 2,
    backgroundColor: "#21295c",
    borderRadius: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 15
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
  buttonContainer: {
    flex: 1,
  },
});
