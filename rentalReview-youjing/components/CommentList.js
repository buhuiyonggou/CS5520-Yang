import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors, pressedStyle } from "../helper/color";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";

export function CommentList({ review, reviewItem }) {
  const navigation = useNavigation();

  const checkEmptyReview = (review) => {
    if (review === undefined || review.length == 0) {
      return true;
    }
    return false;
  };

  return (
    <View>
      {checkEmptyReview(review) ? (
        <View style={styles.item}>
          <Text>No new comment is added!</Text>
        </View>
      ) : (
        <FlatList
          data={review}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PressableButton
              style={styles.item}
              pressHandler={() =>
                navigation.navigate("UpdateComment", { item, reviewItem })
              }
            >
              <Text style={styles.text}>Comment: {item.comment}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.text}>Rating: {item.rating}</Text>
                <AntDesign name="star" color={colors.yellow} size={20} />
              </View>
            </PressableButton>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: colors.white,
    padding: 6,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    height: 63,
  },
  text: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 2,
    marginRight: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
