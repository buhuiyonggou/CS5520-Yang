import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "./firebase-setup";

// Create a review
export async function addReviewFunction(data) {
  try {
    const reviewRef = collection(firestore, "review");
    await addDoc(reviewRef, data);
  } catch (error) {
    console.error("Error adding review:", error);
  }
}

// Create a comment
export async function addCommentFunction(data, reviewId) {
  try {
    const commentRef = collection(firestore, "review", reviewId, "comment");
    await addDoc(commentRef, data);
  } catch (error) {
    console.error("Error adding comment:", error);
  }
}

// Delete a comment
export async function deleteCommentFunction(reviewId, commentId) {
  try {
    const commentRef = doc(firestore, "review", reviewId, "comment", commentId);
    await deleteDoc(commentRef);
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
}

// Update a comment
export async function updateCommentFunction(reviewId, commentId, data) {
  try {
    const commentRef = doc(firestore, "review", reviewId, "comment", commentId);
    await updateDoc(commentRef, data);
  } catch (error) {
    console.error("Error updating comment:", error);
  }
}
