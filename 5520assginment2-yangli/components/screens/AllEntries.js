import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";
import AddEntry from "./AddEntry";

export default function AllEntries({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [allEntries, setAllEntries] = useState([]);

  function hideModal() {
    setModalVisible(false);
  }
  function handleChangeEntries(changeEntry) {
    setAllEntries((prevEntries) => {
      return [...prevEntries, changeEntry];
    });
  }

  function goalPressed(pressedGoal) {
    console.log("goal pressed ", pressedGoal);
    navigation.navigate("Goal Details", { pressedGoal });
  }

  return (
    <SafeAreaView style={styles.container}>
      <AddEntry
        changeEntryCallBack={handleChangeEntries}
        modalVisible={modalVisible}
        hideModal={hideModal}
      />
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
