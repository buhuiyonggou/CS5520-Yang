import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { addReviewFunction } from "../firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../helper/color";
import { SingleButton } from "../components/SingleButton";

const AddReview = ({ props }) => {
  const [address, setAddress] = React.useState("");
  const [postalcode, setPostalcode] = React.useState("");
  const [rental, setRental] = React.useState("");
  const [term, setTerm] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [city, setCity] = React.useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    addReviewFunction({ description, address, postalcode, city });
    setAddress("");
    setPostalcode("");
    setRental("");
    setTerm("");
    setCity("");
    setDescription("");
    navigation.goBack();
  };

  const handleReset = () => {
    setAddress("");
    setPostalcode("");
    setCity("");
    setRental("");
    setTerm("");
    setDescription("");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Address</Text>
          <TextInput
            placeholder="Enter the rental address"
            style={styles.input}
            value={address}
            onChangeText={(newtext) => {
              setAddress(newtext);
            }}
          />
        </View>

        <View>
          <Text style={styles.title}>Postal Code</Text>
          <TextInput
            placeholder="Enter postal code"
            style={styles.input}
            value={postalcode}
            onChangeText={(newtext) => {
              setPostalcode(newtext);
            }}
          />
        </View>

        <View>
          <Text style={styles.title}>City</Text>
          <TextInput
            placeholder="Enter city name"
            style={styles.input}
            value={city}
            onChangeText={(newtext) => {
              setCity(newtext);
            }}
          />
        </View>

        <View>
          <Text style={styles.title}>Rental</Text>
          <TextInput
            placeholder="CAD per month"
            style={styles.input}
            value={rental}
            onChangeText={(newtext) => {
              setRental(newtext);
            }}
          />
        </View>

        <View>
          <Text style={styles.title}>Contract Term</Text>
          <TextInput
            placeholder="*** months' contract"
            style={styles.input}
            value={term}
            onChangeText={(newtext) => {
              setTerm(newtext);
            }}
          />
        </View>

        <View>
          <Text style={styles.title}>Comment</Text>
          <TextInput
            placeholder="Enter your comment about this landlord here"
            numberOfLines={5}
            style={[styles.input, styles.text1]}
            value={description}
            onChangeText={(newtext) => {
              setDescription(newtext);
            }}
          />
        </View>

        <View style={styles.buttons}>
          <SingleButton text="Reset" onPress={handleReset} />
          <SingleButton text="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 15,
    marginTop: 10,
  },
  input: {
    marginTop: 8,
    height: 50,
    width: 350,
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.black,
    borderWidth: 1,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 30,
    margin: 20,
  },
  text1: {
    height: 90,
    textAlignVertical: "top",
  },
});
