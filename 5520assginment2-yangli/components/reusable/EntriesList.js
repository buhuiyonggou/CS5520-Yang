import { FlatList, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import EntryItem from "./EntryItem";

export default function EntriesList({ navigation, filterCondition }) {
  const [entries, setEntries] = useState([]);

  function addNewEntry(newEntry) {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  }

  function handleDelete(id) {
    setEntries((prevEntries) => {
      return prevEntries.filter((entry) => entry.id !== id);
    });
  }

  function handleConfirm(id) {
    setEntries((prevEntries) => {
      return prevEntries.map((entry) =>
        entry.id === id ? { ...entry, confirmed: true } : entry
      );
    });
  }

  function filterEntries(entries) {
    if (filterCondition === "overlimit") {
      return entries.filter(
        (entry) => entry.calories > 500 && !entry.confirmed
      );
    } else {
      return entries;
    }
  }

  return (
    <View style={styles.listsContainer}>
      <FlatList
        contentContainerStyle={styles.flatListContent}
        data={filterEntries(entries)}
        renderItem={({ item }) => {
          return (
            <EntryItem
              entryData={item}
              deleteFunction={handleDelete}
              confirmFunction={handleConfirm}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listsContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListContent: {
    padding: 10,
  },
});
