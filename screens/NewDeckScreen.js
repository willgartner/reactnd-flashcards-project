import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Colors from "../utils/Colors";

const NewDeckScreen = (props) => {
  const [valid, setValid] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const addDeckHandler = props.screenProps.addDeckHandler;

  const handleSubmit = (deckName) => {
    const thisId = addDeckHandler(deckName);
    setEnteredName("");
    setValid(false);
    props.navigation.navigate({
      routeName: "Home",
      params: {
        deckId: thisId,
      },
    });
    props.navigation.navigate({
      routeName: "Deck",
      params: {
        deckId: thisId,
      },
    });
  };

  const nameInputHandler = (enteredName) => {
    setEnteredName(enteredName);
    isValidInput();
  };

  const isValidInput = () => {
    if (enteredName.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>Enter New Deck Name</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Deck Name"
          style={styles.input}
          onChangeText={nameInputHandler}
          value={enteredName}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ flex: 1 }}
          disabled={!valid}
          onPress={() => handleSubmit(enteredName)}
        >
          <View style={valid ? styles.button : disabledButton}>
            <Text style={styles.buttonText}>Add Deck</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

NewDeckScreen.navigationOptions = {
  headerTitle: "Add a New Deck",
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

export default NewDeckScreen;
