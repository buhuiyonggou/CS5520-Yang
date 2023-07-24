import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import EntryList from "./EntryList";
import AddEntry from "./AddEntry";

export default function OverLimit({ navigation }) {
  const [newOverLimit, setNewOverLimit] = useState(null);

  // const changeEntryCallBack = (entry) => {
  //   setNewOverLimit(entry);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.entriesContainer}>
        {/* <AddEntry
          changeEntryCallBack={changeEntryCallBack}
          navigation={navigation}
        />
        <EntryList newEntry={newEntry} navigation={navigation} />
        <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  entriesContainer: { flex: 1 },
});
