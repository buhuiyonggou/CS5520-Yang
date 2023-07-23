import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AllEntries from "./components/screens/AllEntries";
import OverLimit from "./components/screens/OverLimit";
import AddEntry from "./components/screens/AddEntry";
import PressableButton from "./components/reusable/PressableButton";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="All Entries"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerStyle: { backgroundColor: "#a2a" },
        headerTintColor: "white",
      }}
    >
      <Tab.Screen
        name="All Entries"
        component={AllEntries}
        options={({ navigation }) => ({
          tabBarLabel: "All Entries",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={"bars"} color={color} size={size} />
          ),
          headerRight: () => (
            <PressableButton
              pressableFunction={() => navigation.navigate("Add Entry")}
              defaultStyle={{ backgroundColor: "#a2a" }}
              pressedStyle={{ backgroundColor: "lightgrey" }}
            >
              <AntDesign name="plus" size={24} color="white" />
            </PressableButton>
          ),
        })}
      />
      <Tab.Screen
        name="Over-limit Entries"
        component={OverLimit}
        options={({ navigation }) => ({
          tabBarLabel: "Over-limit Entries",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="exclamation" color={color} size={size} />
          ),
          headerRight: () => (
            <PressableButton
              pressableFunction={() => navigation.navigate("Add Entry")}
              defaultStyle={{ backgroundColor: "#a2a" }}
              pressedStyle={{ backgroundColor: "lightgrey" }}
            >
              <AntDesign name="plus" size={24} color="white" />
            </PressableButton>
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Go Back"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Entry" component={AddEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
