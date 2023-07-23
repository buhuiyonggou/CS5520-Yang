import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import PressableButton from "../reusable/PressableButton";

export default function AddEntry({ navigation, changeEntryCallBack }) {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  const validateInput = () => {
    if (calories === "" || description === "" || isNaN(calories)) {
      Alert.alert("Invalid input", "Please check your invalid values");
      return false;
    }
    return true;
  };

  const resetFields = () => {
    setCalories("");
    setDescription("");
  };

  const handleSubmit = () => {
    if (!validateInput()) return;

    const newEntry = {
      id: Math.random().toString(),
      calories: parseInt(calories),
      description,
      confirmed: false,
    };

    changeEntryCallBack(newEntry);
    resetFields();
    navigation.goBack();
    // navigation.popToTop();
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.text}>Calories</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={setCalories}
            value={calories}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.text}>Description</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            onChangeText={setDescription}
            value={description}
            multiline
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PressableButton
          pressableFunction={resetFields}
          pressedStyle={{ backgroundColor: "purple" }}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </PressableButton>
        <PressableButton
          pressableFunction={handleSubmit}
          pressedStyle={{ backgroundColor: "purple" }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </PressableButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: "10%",
    backgroundColor: "lightblue",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  labelContainer: {
    width: "30%",
  },
  inputWrapper: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  input: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    color: "purple",
    textAlign: "left",
    backgroundColor: "lightgray",
  },
  descriptionInput: {
    height: 100,
  },
  text: {
    color: "purple",
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
