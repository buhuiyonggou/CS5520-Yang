import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "../firebaseConfiguration";
import { ref, onValue, off } from "firebase/database";

export default function EntryList({ navigation }) {
  const [allEntries, setAllEntries] = useState([]);
  const [overLimitEntries, setOverLimitEntries] = useState([]);
  const entriesRef = firebase.database().ref("entries");

  useEffect(() => {
    



      const overLimitList = entriesList.filter(
        (entry) => entry.overLimit && entry.confirmed
      );
      setOverLimitEntries(overLimitList);
    };

    entriesRef.on("value", handleDataChange);

    return () => {
      entriesRef.off("value", handleDataChange);
    };
  }, []);

  function handleDelete(id) {
    console.log("Deleting entry with id: ", id);
    const entryToDeleteRef = entriesRef.child(id);
    entryToDeleteRef.remove();
  }

  function handleConfirm(id) {
    console.log("Confirming entry with id: ", id);
    const entryToConfirmRef = entriesRef.child(id);
    entryToConfirmRef.update({ confirmed: true });
  }

  return allEntries.map((entryData) => (
    <View key={entryData.id} style={styles.entryItemContainer}>
      <Pressable
        onPress={() => {
          console.log("Navigating to EditEntry with data: ", entryData);
          navigation.navigate("EditEntry", {
            entryData: entryData,
            deleteFunction: handleDelete,
            confirmFunction: handleConfirm,
          });
        }}
        android_ripple={{ color: "blue" }}
      >
        <Text>{entryData.description}</Text>
        <View style={styles.pressableBuffer}>
          <Text>{entryData.calories}</Text>
        </View>
      </Pressable>
    </View>
  ));
}

const styles = StyleSheet.create({
  entryItemContainer: { backgroundColor: "pink" },
  pressableBuffer: { padding: 10 },
});
