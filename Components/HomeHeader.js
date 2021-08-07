import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/MaterialIcons";
const HomeHeader = ({ navigation }) => {
  return (
    <View style={styles.headerStyle}>
      <View animation="slideInUp" style={styles.openDrawerButton}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={25} color="#014b78" />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>COASTAL FACILITY SERVICES</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ marginRight: 5 }}>
          <Icon name="notifications" color="#014b78" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="share" color="#A3A847" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 20,
    height: Constants.statusBarHeight + 70,
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    alignSelf: "center",
  },
  headerText: {
    color: "#014b78",
    fontSize: 15,
    fontWeight: "bold",
  },
  openDrawerButton: {
    flexDirection: "row",

    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
