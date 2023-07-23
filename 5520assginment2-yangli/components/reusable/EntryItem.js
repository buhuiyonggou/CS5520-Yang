import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function EntryItem({ entryData, navigation }) {
  return (
    <View style={styles.entryItemContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate("EntryDetails", {
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
  );
}

const styles = StyleSheet.create({
  entryItemContainer: { backgroundColor: "pink" },
  pressableBuffer: { padding: 10 },
});
