import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./components/screens/AllEntries";
import OverLimit from "./components/screens/OverLimit";
import AddEntry from "./components/screens/AddEntry";
import PressableButton from "./components/reusable/PressableButton";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AllEntriesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#a2a" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="AllEntriesScreen"
        component={AllEntries}
        options={({ navigation }) => ({
          headerRight: () => (
            <PressableButton
              defaultStyle={{ color: "white" }}
              pressableFunction={() => navigation.navigate("AddEntryScreen")}
            >
              <AntDesign name="plus" size={24} color="white" />
            </PressableButton>
          ),
        })}
      />
      <Stack.Screen name="AddEntryScreen" component={AddEntry} />
    </Stack.Navigator>
  );
}

function OverLimitStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#a2a" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="OverLimitScreen"
        component={OverLimit}
        options={({ navigation }) => ({
          headerRight: () => (
            <PressableButton
              pressableFunction={() => navigation.navigate("AddEntryScreen")}
            >
              <AntDesign name="plus" size={24} color="white" />
            </PressableButton>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [entries, setEntries] = useState([]);

  function addNewEntry(newEntry) {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "AllEntriesTab") {
              iconName = "bars";
            } else if (route.name === "OverLimitTab") {
              iconName = "exclamation";
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="AllEntriesTab" component={AllEntriesStack} />
        {(props) => (
          <AllEntriesStack
            {...props}
            entries={entries}
            addNewEntry={addNewEntry}
          />
        )}
        <Tab.Screen name="OverLimitTab" component={OverLimitStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
