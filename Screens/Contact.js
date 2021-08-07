import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

const ContactScreen = ({ navigation, route }) => {
  const data = [
    {
      id: "1",
      name: "WhatsApp",
      icon: "whatsapp",
      color: "#A3A847",
    },
    {
      id: "2",
      name: "Facebook",
      icon: "facebook",
      color: "#0F52BA",
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
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
                paddingBottom: 30,
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
                    backgroundColor: item.color,

                    marginLeft: 10,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon name={item.icon} color="white" size={50} />
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
                      backgroundColor: item.color,
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
                    <Text style={{ color: "white" }}>Connect</Text>
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

const Contact = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact Us"
        component={() => ContactScreen(navigation, route)}
        options={{
          title: "Contact Us",
          headerTitleStyle: { fontWeight: "bold", fontSize: 15 },
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

export default Contact;
