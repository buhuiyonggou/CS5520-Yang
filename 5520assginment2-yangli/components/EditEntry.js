import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";

export default function EditEntry({
  route,
  navigation,
  deleteFunction,
  confirmFunction,
}) {
  const entryData = route.params.entryData;

  const handleDeletePress = () => {
    deleteFunction(entryData);
    navigation.goBack();
  };

  const handleConfirmPress = () => {
    confirmFunction(entryData);
    navigation.goBack();
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardInfoContainer}>
        <Text style={styles.text}>{entryData.calories} Calories</Text>
        <Text style={styles.text}>{entryData.description}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PressableButton pressableFunction={handleDeletePress}>
          <AntDesign name="delete" size={24} color="white" />
        </PressableButton>
        {entryData.calories > 500 && (
          <PressableButton pressableFunction={handleConfirmPress}>
            <AntDesign name="check" size={24} color="white" />
          </PressableButton>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "lightblue",
  },
  cardInfoContainer: {
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  text: {
    fontSize: 24,
    color: "purple",
    textAlign: "center",
  },
});
