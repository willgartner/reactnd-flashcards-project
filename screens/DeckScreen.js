import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";

const DeckScreen = (props) => {
  const deckId = props.navigation.getParam("deckId");
  const deckList = props.screenProps.deckList;
  const selectedDeck = deckList.find((deck) => deck.id === deckId);
  const title = selectedDeck.title;
  const cardCount = selectedDeck.questions.length;
  const deleteDeckHandler = props.screenProps.deleteDeckHandler;

  return (
    <View style={styles.pageItem}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.detail}>{cardCount} cards</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            props.navigation.navigate({
              routeName: "NewCard",
              params: {
                deckId,
              },
            });
          }}
        >
          <View style={addButton}>
            <Text style={touchText}>Add Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            props.navigation.navigate({
              routeName: "Quiz",
              params: {
                deckId,
              },
            });
          }}
        >
          <View style={quizButton}>
            <Text style={touchText}>Start Quiz</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            props.navigation.navigate({
              routeName: "DeckList",
            });
            //This set timeout is in place to prevent errors on deletion
            setTimeout(() => deleteDeckHandler(deckId), 500);
          }}
        >
          <View style={styles.container}>
            <Text style={deleteText}>Delete Deck</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

DeckScreen.navigationOptions = (navigationData) => {
  const deckId = navigationData.navigation.getParam("deckId");
  const deckList = navigationData.screenProps.deckList;
  const selectedDeck = deckList.find((deck) => deck.id === deckId);

  return {
    headerTitle: selectedDeck.title,
  };
};

const styles = StyleSheet.create({
  pageItem: {
    flex: 1,
    margin: 10,
    height: "100%",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    width: "100%",
    color: Colors.darkColor,
  },
  detail: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    textAlign: "center",
    color: Colors.darkColor,
    margin: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    height: 60,
    maxHeight: 60,
    elevation: 3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
  },
  buttonText: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
  },
});

const addButton = StyleSheet.flatten([
  styles.container,
  styles.shadow,
  { backgroundColor: Colors.secondaryColor },
]);
const quizButton = StyleSheet.flatten([
  styles.container,
  styles.shadow,
  { backgroundColor: Colors.successColor },
]);
const touchText = StyleSheet.flatten([
  styles.buttonText,
  { color: Colors.lightColor },
]);
const deleteText = StyleSheet.flatten([
  styles.buttonText,
  { color: Colors.dangerColor, textDecorationLine: "underline" },
]);

export default DeckScreen;
