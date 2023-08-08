import { firestore } from "../firebase/firebase-setup";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { addCommentFunction } from "../firebase/firestore";
import { CommentList } from "../components/CommentList";
import { SingleButton } from "../components/SingleButton";
import { colors } from "../helper/color";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
  onSnapshot,
  QuerySnapshot,
  query,
  where,
} from "firebase/firestore";

const ReviewDetails = (props) => {
  const reviewId = props.route.params.item.id;
  const reviewItem = props.route.params.item;

  const [review, setReview] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const navigation = useNavigation();

  const submitReview = () => {
    const data = {
      comment: comment,
      rating: rating,
    };

    addCommentFunction(data, reviewId);
    setComment("");
    setRating("");
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // sub collection: comment
      const q = query(collection(firestore, "review", reviewId, "comment"));
      onSnapshot(q, (querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
          comments.push({ id: doc.id, ...doc.data() });
        });
        setReview(comments);
      });
    });

    return unsubscribe;
  }, [navigation, reviewId]);

  return (
    <View>
      <Image source={require("../assets/apt2.jpeg")} style={styles.image} />
      <Text style={styles.display}>Address: {reviewItem.address}</Text>
      <Text style={styles.display}>City: {reviewItem.city}</Text>
      <Text style={styles.display}>Rental: {reviewItem.rental}</Text>
      <Text style={styles.display}>
        Contract Term: {reviewItem.term} months
      </Text>
      <Text style={styles.display}>Comment: {reviewItem.description}</Text>

      <Text style={styles.reviewText}>Comment</Text>
      <TextInput
        style={styles.input}
        value={comment}
        placeholder="Enter your detailed comment here"
        onChangeText={(newText) => {
          setComment(newText);
        }}
      />

      <Text style={styles.reviewText}>Rating</Text>
      <TextInput
        value={rating}
        style={styles.input}
        placeholder="Enter your rating number from 1 to 5"
        onChangeText={(newText) => {
          setRating(newText);
        }}
      />

      <View style={styles.SingleButtonContainer}>
        <SingleButton text="Add Comment" onPress={submitReview} />
      </View>

      <Text></Text>
      <CommentList review={review} reviewItem={reviewItem} />
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  display: {
    marginLeft: 15,
    marginTop: 5,
  },
  reviewText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15,
    marginBottom: 6,
    marginLeft: 15,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    paddingLeft: 15,
    maxWidth: "100%",
  },
  SingleButtonContainer: {
    marginTop: 35,
  },
});
