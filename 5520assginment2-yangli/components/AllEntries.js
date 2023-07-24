import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import React from "react";
import EntryList from "./EntryList";

export default function AllEntries({ navigation }) {
  // const handlePressEntry = (id) => {
  //   navigation.navigate("EditEntry", {
  //     entryId: id,
  //   });
  // };

  return (
    <View style={styles.entriesContainer}>
      <EntryList navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  entriesContainer: { flex: 1 },
});
