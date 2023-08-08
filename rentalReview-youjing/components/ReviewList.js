import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../helper/color";
import PressableButton from "./PressableButton";
import { Ionicons } from "@expo/vector-icons";

export function ReviewList({ review }) {
  const navigation = useNavigation();

  const renderReviewItem = ({ item }) => {
    return (
      <PressableButton
        style={styles.item}
        pressHandler={() => navigation.navigate("ReviewDetails", { item })}
      >
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../assets/apt1.jpeg")}
              style={styles.backgroundImage}
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.address}</Text>

            <View style={styles.cityContainer}>
              <Ionicons
                name="location-outline"
                color={colors.black}
                size={16}
              />
              <Text>{item.city}</Text>
            </View>
          </View>
        </View>
      </PressableButton>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={review}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderReviewItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    flexBasis: "42%",
    margin: 8,
    backgroundColor: colors.LIGHT_GREY,
    padding: 5,
    marginVertical: 10,
    marginHorizontal: "2.5%",
    borderRadius: 3,
    maxWidth: 170,
    height: 160,
  },
  cityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  name: {
    flexWrap: "wrap",
    fontWeight: "bold",
    marginLeft: 5,
  },
  backgroundImage: {
    width: 100,
    height: 200,
  },
  infoContainer: {
    flexBasis: "50%",
  },
  itemContainer: {
    flexDirection: "column",
    flexBasis: "100%",
  },
  imageContainer: {
    flexBasis: "150%",
  },
});
