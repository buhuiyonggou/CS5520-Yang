import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AllEntries from "./components/AllEntries";
import OverLimit from "./components/OverLimit";
import AddEntry from "./components/AddEntry";
import EditEntry from "./components/EditEntry";
import PressableButton from "./components/PressableButton";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="All Entries"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "All Entries") {
            iconName = "bars";
          } else if (route.name === "Over-limit Entries") {
            iconName = "exclamation";
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
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
    >
      <Tab.Screen name="All Entries" component={AllEntries} />
      <Tab.Screen name="Over-limit Entries" component={OverLimit} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Entry" component={AddEntry} />
        <Stack.Screen name="Edit Entry" component={EditEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
