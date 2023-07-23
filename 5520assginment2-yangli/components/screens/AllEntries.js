import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";
import AddEntry from "./AddEntry";

export default function AllEntries({ navigation }) {
  const [allEntries, setAllEntries] = useState([]);

  function handleChangeEntries(changeEntry) {
    setAllEntries((prevEntries) => {
      return [...prevEntries, changeEntry];
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.entriesContainer}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={allEntries}
          renderItem={({ item }) => {
            return <EntryItem entryData={item} />;
          }}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
