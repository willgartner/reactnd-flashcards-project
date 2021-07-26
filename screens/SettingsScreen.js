import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";

const NewDeckScreen = (props) => {
  const { resetDeckHandler, triggerNotificationHandler } = props.screenProps;

  const handleReset = (deckName) => {
    resetDeckHandler(deckName);
  };

  const handleNotification = () => {
    triggerNotificationHandler();
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Settings</Text>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => handleReset()}>
          <View style={resetButton}>
            <Text style={styles.buttonText}>Reset Deck</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => handleNotification()}
        >
          <View style={notificationButton}>
            <Text style={styles.buttonText}>Send Notification</Text>
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
    width: "100%",
    justifyContent: "center",
    overflow: "hidden",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    color: Colors.darkColor,
    margin: 15,
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
  },
  buttonText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    color: Colors.lightColor,
  },
});

const resetButton = StyleSheet.flatten([
  styles.button,
  { backgroundColor: Colors.dangerColor },
]);

const notificationButton = StyleSheet.flatten([
  styles.button,
  { backgroundColor: Colors.successColor },
]);

export default NewDeckScreen;
