import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { colors } from "../helper/color";

const PressableButton = ({ style, pressHandler, children }) => {
  const handlePress = ({ pressed }) => {
    return [style, pressed ? styles.pressedStyle : styles.defaultStyle];
  };

  return (
    <Pressable style={handlePress} onPress={pressHandler}>
      <View>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressedStyle: {
    backgroundColor: colors.grey1,
    opacity: 0.5,
  },
  defaultStyle: {
    backgroundColor: colors.blue3,
  },
});

export default PressableButton;
