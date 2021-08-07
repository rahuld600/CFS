import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createStackNavigator();

const Services = (navigation, route) => {
  const data = [
    {
      id: "1",
      name: "Task1",
      onPress: () => {},
    },
    {
      id: "2",
      name: "Task2",
      onPress: () => {},
    },
    {
      id: "3",
      name: "Task3",
      onPress: () => {},
    },
    {
      id: "4",
      name: "Task4",
      onPress: () => {},
    },
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        {route?.params?.pageName || "WRONG_PAGE"}
      </Text>
      <View
        style={{
          backgroundColor: "#014b78",
          width: Dimensions.get("window").width / 6,
          height: 5,
          marginVertical: 10,
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: Dimensions.get("window").width,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  width: Dimensions.get("window").width / 1.1,
                  height: 100,

                  borderRadius: 8,
                  shadowColor: "#ccc",
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: Dimensions.get("window").width / 5,
                    height: 80,
                    backgroundColor: "#014b78",
                    opacity: 0.5,
                    marginLeft: 10,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon name="warning" color="yellow" size={20} />
                  <Text style={{ color: "white" }}>Image</Text>
                </View>
                <View
                  style={{
                    width: Dimensions.get("window").width / 4,
                    justifyContent: "space-between",
                    marginLeft: 20,
                    height: 60,
                  }}
                >
                  <Text>{item.name}</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#A3A847",
                      padding: 5,
                      justifyContent: "center",
                      borderRadius: 4,
                      alignItems: "center",
                      shadowColor: "#ccc",
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.8,
                      shadowRadius: 7,
                      elevation: 5,
                    }}
                  >
                    <Text style={{ color: "white" }}>Buy now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const ServicesStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Coastal Facility Services"
        component={() => Services(navigation, route)}
        options={{
          title: "Coastal Facility Services",
          headerTitleStyle: { fontWeight: "bold", fontSize: 15 },
          headerStyle: { backgroundColor: "#014b78" },
          headerTintColor: "#fff",
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-back" color="white" size={25} />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Icon name="phone" color="yellow" size={25} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ServicesStack;
