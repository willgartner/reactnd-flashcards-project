import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";

const Score = (props) => {
  const { score, cardCount, pct, resetQuiz, navigate, deckId } = props

  const handleSubmit = (nav) => {
    resetQuiz();
    navigate({
        routeName: nav,
        params: {
          deckId,
        },
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.pageText}>{score} out of {cardCount}</Text>
        </View>
        <View>
          <Text style={pct < 70 ? failScore : passScore}>{pct}%</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => handleSubmit("Quiz")}>
          <View style={quizButton}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => handleSubmit("Deck")}>
          <View style={deckButton}>
            <Text style={styles.buttonText}>Quit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
    height: "100%",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  textContainer: {
    flex: 2,
    minHeight: 250
  },
  pageText: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    color: Colors.primaryColor,
  },
  scoreText: {
    fontFamily: "open-sans-bold",
    fontSize: 80,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 25,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    height: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    padding: 15,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    backgroundColor: Colors.accentColor,
  },
  buttonText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    color: Colors.lightColor,
  },
});


const deckButton = StyleSheet.flatten([
  styles.button,
  { backgroundColor: Colors.primaryColor },
]);

const quizButton = StyleSheet.flatten([
  styles.button,
  { backgroundColor: Colors.secondaryColor },
]);

const failScore = StyleSheet.flatten([
    styles.scoreText,
    { color: Colors.dangerColor },
  ]);

  const passScore = StyleSheet.flatten([
    styles.scoreText,
    { color: Colors.successColor },
  ]);

export default Score;