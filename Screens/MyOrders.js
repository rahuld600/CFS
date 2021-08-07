import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Completed from "./MyOrders/Completed";
import InProgress from "./MyOrders/InProgress";
import Constants from "expo-constants";
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";
const TopBar = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Rides"
      tabBarOptions={{
        style: { backgroundColor: "#014b78" },
        activeTintColor: "#fff",
        indicatorStyle: { backgroundColor: "yellow" },
      }}
    >
      <TopTab.Screen name="InProgress" component={InProgress} />
      <TopTab.Screen name="Completed" component={Completed} />
    </TopTab.Navigator>
  );
};

const MyOrders = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyOrders"
        component={TopBar}
        options={{
          headerStyle: { backgroundColor: "#014b78" },
          headerTintColor: "#fff",
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => navigation.openDrawer()}
              >
                <Icon name="menu" color="white" size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MyOrders;
