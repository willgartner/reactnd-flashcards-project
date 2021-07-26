import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Score from "../components/Score";
import Colors from "../utils/Colors";

const QuizScreen = (props) => {
  const [currentCard, setCurrentCard] = useState(1);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = props.navigation.navigate;
  const deckId = props.navigation.getParam("deckId");
  const deckList = props.screenProps.deckList;
  const selectedDeck = deckList.find((deck) => deck.id === deckId);
  const cardCount = selectedDeck.questions.length;
  const pct = Math.round((score / cardCount) * 100);

  const scoreHandler = (newScore) => {
    setScore(score + newScore);
    setCurrentCard(currentCard + 1);
    if (currentCard == cardCount) {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentCard(1);
    setShowScore(false);
  };

  return (
    <View>
      <Text style={styles.countText}>
        {currentCard}/{cardCount}
      </Text>
      <View style={!showScore ? { display: "flex" } : { display: "none" }}>
        <Card
          deckId={deckId}
          deckList={deckList}
          currentIndex={currentCard - 1}
          cardCount={cardCount}
          scoreHandler={scoreHandler}
        />
      </View>
      <View style={showScore ? { display: "flex" } : { display: "none" }}>
        <Score
          score={score}
          cardCount={cardCount}
          pct={pct}
          resetQuiz={resetQuiz}
          navigate={navigate}
          deckId={deckId}
        />
      </View>
    </View>
  );
};

QuizScreen.navigationOptions = (navigationData) => {
  const deckId = navigationData.navigation.getParam("deckId");
  const deckList = navigationData.screenProps.deckList;
  const selectedDeck = deckList.find((deck) => deck.id === deckId);

  return {
    headerTitle: `${selectedDeck.title} Quiz`,
  };
};

const styles = StyleSheet.create({
  countText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginHorizontal: 25,
    marginVertical: 10,
    color: Colors.primaryColor,
  },
});

export default QuizScreen;
