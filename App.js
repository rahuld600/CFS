import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Routes from "./routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
