import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Colors from "../utils/Colors";

const NewCardScreen = (props) => {
  const [valid, setValid] = useState(false);
  const [enteredQuestion, setEnteredQuestion] = useState("");
  const [enteredAnswer, setEnteredAnswer] = useState("");
  const addCardHandler = props.screenProps.addCardHandler;
  const deckId = props.navigation.getParam("deckId");

  const handleSubmit = (question, answer) => {
    addCardHandler(question, answer, deckId);
    setEnteredQuestion("");
    setEnteredAnswer("");
    setValid(false);
    props.navigation.navigate({
      routeName: "Deck",
      params: {
        deckId,
      },
    });
  };

  const questionInputHandler = (enteredQuestion) => {
    setEnteredQuestion(enteredQuestion);
    isValidInput();
  };

  const answerInputHandler = (enteredAnswer) => {
    setEnteredAnswer(enteredAnswer);
    isValidInput();
  };

  const isValidInput = () => {
    if (enteredQuestion.length > 0 && enteredAnswer.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>Enter Question and Answer</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Question"
          style={styles.input}
          onChangeText={questionInputHandler}
          value={enteredQuestion}
        />
        <TextInput
          placeholder="Answer"
          style={styles.input}
          onChangeText={answerInputHandler}
          value={enteredAnswer}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ flex: 1 }}
          disabled={!valid}
          onPress={() => handleSubmit(enteredQuestion, enteredAnswer)}
        >
          <View style={valid ? styles.button : disabledButton}>
            <Text style={styles.buttonText}>Add Card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

NewCardScreen.navigationOptions = {
  headerTitle: "Add a New Card",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
    height: "100%",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  detail: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    color: Colors.primaryColor,
  },
  detailContainer: {
    flex: 1,
    margin: 10,
  },
  inputContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderColor: "#dfdfdf",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 2,
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

const disabledButton = StyleSheet.flatten([styles.button, { opacity: 0.25 }]);

export default NewCardScreen;
