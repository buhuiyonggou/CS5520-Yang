import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { headerStyle, colors } from "../helper/color";
import AllReview from "./AllReview";
import AddReview from "./AddReview";
import FavoriteReview from "./FavoriteReview";
import Me from "./Me";

const Tab = createBottomTabNavigator();

const Main = () => {
  const screenOptions = {
    ...headerStyle,
    tabBarStyle: {
      backgroundColor: colors.white,
    },
    tabBarActiveTintColor: colors.blue2,
    tabBarInactiveTintColor: colors.grey1,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={AllReview}
        options={{
          headerTitle: "VanLandlordReviews",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={AddReview}
        options={{
          headerTitle: "Post a Review",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteReview}
        options={{
          headerTitle: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart-outlined" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
