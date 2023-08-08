import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { collection, query, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase/firebase-setup";
import { ReviewList } from "../components/ReviewList";

const AllReview = () => {
  const [review, setReview] = useState([]);
  const isFavorite = true;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "review"),
      (snapshot) => {
        const reviewData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReview(reviewData);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ReviewList review={review} isFavorite={isFavorite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AllReview;
