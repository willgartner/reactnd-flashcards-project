import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@reactnd_flashcards";

export const getDecks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.warn("ERROR: ", e);
  }
};

export const saveDecks = async (decks) => {
  try {
    return await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  } catch (e) {
    console.warn("ERROR: ", e);
  }
};

export const resetDecks = async () => {
  try {
    return await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn("ERROR: ", e);
  }
};
