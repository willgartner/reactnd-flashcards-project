import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";

const NewDeckScreen = (props) => {
  const resetDeckHandler = props.screenProps.resetDeckHandler;

  const handleReset = (deckName) => {
    resetDeckHandler(deckName);
    props.navigation.navigate({
      routeName: "Home",
    });
  };

  return (
    <View style={styles.screen}>
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => handleReset()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Reset Deck</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

NewDeckScreen.navigationOptions = {
  headerTitle: "Reset Deck",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 15,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    overflow: "hidden",
  },

  button: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 15,
    height: 60,
    maxHeight: 60,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    padding: 15,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    backgroundColor: Colors.dangerColor,
  },
  buttonText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    color: Colors.lightColor,
  },
});

export default NewDeckScreen;
