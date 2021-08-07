import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, LogBox, StatusBar } from "react-native";

import HomeHeader from "../Components/HomeHeader";
import HomeDashboard from "../Components/HomeDashboard";
import Carousel from "../Components/Carousel";
const HomePage = ({ navigation }) => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <HomeHeader navigation={navigation} />
        <Carousel />
        <HomeDashboard navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
