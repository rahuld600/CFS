import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

import HomeHeader from "../Components/HomeHeader";
import HomeDashboard from "../Components/HomeDashboard";
import Carousel from "../Components/Carousel";
const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="dark" />
        <HomeHeader navigation={navigation} />
        <Carousel />
        <HomeDashboard />
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
