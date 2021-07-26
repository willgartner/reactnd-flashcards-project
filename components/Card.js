import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";

const Card = (props) => {
  const [check, setCheck] = useState(false);
  const { deckId, deckList, currentIndex, cardCount, scoreHandler } = props;
  const selectedDeck = deckList.find((deck) => deck.id === deckId);
  const question = currentIndex < cardCount ? selectedDeck.questions[currentIndex].question : '';
  const answer = currentIndex < cardCount ? selectedDeck.questions[currentIndex].answer : '';

  const handleScoreTracking = (score) => {
    setCheck(false);
    scoreHandler(score);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.pageText}>{check ? answer : question}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setCheck(!check)}
          >
            <View style={answerButton}>
              <Text style={styles.buttonText}>
                {check ? "Question" : "Check Answer"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => handleScoreTracking(1)}
        >
          <View style={correctButton}>
            <Text style={styles.buttonText}>Correct</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => handleScoreTracking(0)}
        >
          <View style={wrongButton}>
            <Text style={styles.buttonText}>Incorrect</Text>
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
    overflow: "hidden",
  },
  textContainer: {
    flex: 2,
    minHeight: 250,
    justifyContent: "space-evenly",
  },
  pageText: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    textAlign: "center",
    color: Colors.primaryColor,
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
    height: 60,
    maxHeight: 60,
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

const answerButton = StyleSheet.flatten([
  styles.button,
  { backgroundColor: Colors.accentColor },
]);

const wrongButton = StyleSheet.flatten([
  styles.button,
  { backgroundColor: Colors.dangerColor },
]);

const correctButton = StyleSheet.flatten([
  styles.button,
  { backgroundColor: Colors.successColor },
]);

export default Card;
