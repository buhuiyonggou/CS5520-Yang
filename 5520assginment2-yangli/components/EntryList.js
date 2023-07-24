import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfiguration";
import { collection, getDocs, query } from "firebase/firestore";

export default function EntryList({ navigation }) {
  const [allEntries, setAllEntries] = useState([]);
  const [overLimitEntries, setOverLimitEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "entries"));
      const querySnapshot = await getDocs(q);
      const entriesList = [];
      querySnapshot.forEach((doc) => {
        const entry = doc.data();
        entry.id = doc.id;
        entriesList.push(entry);
      });
      setAllEntries(entriesList);

      const overLimitList = entriesList.filter(
        (entry) => entry.overLimit && !entry.confirmed
      );
      setOverLimitEntries(overLimitList);
    };

    fetchData();
  }, [allEntries]);

  function handleDelete(id) {
    const entryToDeleteRef = entriesRef.child(id);
    entryToDeleteRef.remove();
  }

  function handleConfirm(id) {
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
