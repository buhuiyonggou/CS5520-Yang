import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import PressableButton from "../components/PressableButton";
import {
  deleteCommentFunction,
  updateCommentFunction,
} from "../firebase/firestore";
import { colors } from "../helper/color";

const UpdateComment = (props) => {
  const navigation = props.navigation;
  const review = props.route.params.item;
  const reviewItem = props.route.params.reviewItem;
  const [comment, setComment] = useState(review.comment);
  const [rating, setRating] = useState(review.rating);

  const deleteCommentHandler = () => {
    deleteCommentFunction(reviewItem.id, review.id);
    navigation.navigate("ReviewDetails", { item: reviewItem });
  };

  const updateCommentHandler = () => {
    const data = {
      comment: comment,
      rating: rating,
    };
    updateCommentFunction(reviewItem.id, review.id, data);
    navigation.navigate("ReviewDetails", { item: reviewItem });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textDisplay}>
        <Text>Comment: </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
      </View>
      <View style={styles.textDisplay}>
        <Text style={styles.rating}>Rating: </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={rating}
          onChangeText={(text) => setRating(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PressableButton
          style={styles.button}
          pressHandler={deleteCommentHandler}
        >
          <Text>Delete</Text>
        </PressableButton>
        <PressableButton
          style={styles.button}
          pressHandler={updateCommentHandler}
        >
          <Text>Update</Text>
        </PressableButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 30,
  },
  rating: {
    marginRight: 33,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grey1,
    padding: 8,
    margin: 10,
    width: 350,
    height: 100,
  },
  textDisplay: {
    fontSize: 30,
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    marginTop: 40,
  },
  button: {
    marginTop: 40,
    width: 340,
    backgroundColor: colors.blue1,
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 5,
  },
});

export default UpdateComment;
