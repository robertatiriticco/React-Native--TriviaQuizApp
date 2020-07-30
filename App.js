import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import Question from './components/Question'
import GameOver from './components/GameOver'

export default function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [score, setScore] = useState(0)
  const [indexQuestion, setIndexQuestion] = useState(null)
  const [endGame, setEndGame] = useState(null)
  const [restart, setRestart] = useState(false)

  let questions = []

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
      .then((response) => response.json())
      .then(data => {
        questions = data.results.map(questionData => {
          const questionDetails = {
            question: questionData.question
          }

          questionDetails.correctAnswer = Math.floor(Math.random() * 3)
          questionDetails.choices = [...questionData.incorrect_answers]
          questionDetails.choices.splice(questionDetails.correctAnswer, 0, questionData.correct_answer)

          return questionDetails
        })

        setData(questions)

      }).catch((error) => console.error(error))
      .finally(() => {
        setScore(0)
        setIndexQuestion(0)
        setEndGame(false)
        setRestart(false)
        setLoading(false)
      })
  }, [restart])

  const handleAnswers = newAnswer => {
    if (newAnswer)
      setScore(score + 1)
  }

  const nextQuestion = () => {
    if (indexQuestion !== data.length - 1) {
      const newIndex = indexQuestion + 1
      setIndexQuestion(newIndex)
    }
    else
      setEndGame(true)
  }

  const playAgain = () => {
    setRestart(true)
  }

  return (
    <View style={styles.container}>
        {loading ?
          <ActivityIndicator /> : (
            endGame === false ? 
            (<Question
              key={indexQuestion}
              question={data[indexQuestion].question}
              correctAnswer={data[indexQuestion].correctAnswer}
              questionNumber={indexQuestion}
              totQuestions={data.length}
              choices={data[indexQuestion].choices}
              handleAnswers={handleAnswers}
              nextQuestion={nextQuestion}
            />) : 
            null
          )
        }
      {endGame && !restart ? <GameOver score={score} playAgain={playAgain}/>: null}
      <StatusBar style="auto" />
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
