import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { colors, pressedStyle } from "../helper/color";

export function SingleButton({ text, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressedButton]}
      android_ripple={{ color: colors.blue2, foreground: true }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7,
    padding: 12,
    height: 47,
    minWidth: 99,
    borderRadius: 6,
    shadowRadius: 4,
    shadowOpacity: 0.2,
    margin: 12,
    borderWidth: 1,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.white,
    borderColor: colors.white,
    backgroundColor: colors.blue1,
  },
  pressedButton: {
    ...pressedStyle,
  },
  buttonText: {
    fontSize: 22,
    color: colors.white,
  },
});
