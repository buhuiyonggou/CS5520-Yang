import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase/firebase-setup";

const Me = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const q = query(
          collection(firestore, "user"),
          where("email", "==", "abc@example.com")
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log("No matching documents.");
          return;
        }

        const users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUser(users);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUser();

    // Clean up the subscription
    return () => {
      // Not using onSnapshot anymore, so no need for unsubscribe
    };
  }, []);

  return (
    <View>
      <Text>User Profile</Text>
      {/* Use 'user' state to render user data or any other UI */}
    </View>
  );
};

export default Me;
