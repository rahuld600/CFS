import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";

const HomeDashboard = ({ navigation }) => {
  const rowsData = {
    firstRow: [
      {
        id: "1",
        name: "Manage Events",
        icon: "https://cdn0.iconfinder.com/data/icons/business-management-139/33/business-management-22-512.png",
        onPress: () => {
          navigation.navigate("Services", { pageName: "Event Manage" });
        },
      },
      {
        id: "1",
        name: "Cleaning",
        icon: "https://cdn.dribbble.com/users/92827/screenshots/6184849/cleaning.png",
        onPress: () => {
          navigation.navigate("Services", { pageName: "Cleaning" });
        },
      },
      {
        id: "1",
        name: "Landscaping",
        icon: "https://img.icons8.com/color/452/summer-landscape.png",
        onPress: () => {
          navigation.navigate("Services", { pageName: "Landscapping" });
        },
      },
    ],
    secondRow: [
      {
        id: "1",
        name: "Carpentry",
        icon: "https://easydrawingguides.com/wp-content/uploads/2018/11/Hammer-and-Saw-10.png",
        onPress: () => {
          navigation.navigate("Services", { pageName: "Carpentry Services" });
        },
      },
      {
        id: "2",
        name: "Painting",
        icon: "https://image.flaticon.com/icons/png/512/196/196290.png",
        onPress: () => {
          navigation.navigate("Services", { pageName: "Painting Services" });
        },
      },
      {
        id: "3",
        name: "Pest control",
        icon: "https://www.skpc.in/wp-content/uploads/2018/08/aphids-pest-control-icon-for-local-residential-pest-control-services-and-residential-extermination-in-green.png",
        onPress: () => {
          navigation.navigate("Services", { pageName: "Pest Control" });
        },
      },
    ],
    thirdRow: [
      {
        id: "1",
        name: "Plumbing",
        icon: "https://icon-library.com/images/plumber-icon/plumber-icon-0.jpg",
        onPress: () => {
          navigation.navigate("Services", { pageName: "Plumbing Services" });
        },
      },
      {
        id: "2",
        name: "Electrical",
        icon: "https://image.flaticon.com/icons/png/512/2654/2654057.png",
        onPress: () => {
          navigation.navigate("Services", { pageName: "Electrical Services" });
        },
      },
      {
        id: "3",
        name: "Mechanical",
        icon: "https://image.flaticon.com/icons/png/512/843/843289.png",
        onPress: () => {
          navigation.navigate("Services", { pageName: "Mechanical Services" });
        },
      },
    ],
  };

  return (
    <View style={styles.optionsContainer}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginVertical: 10,
          alignSelf: "center",
          color: "#014b78",
        }}
      >
        Explore Our Services
      </Text>
      <View style={styles.optionsRow}>
        {rowsData.firstRow.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.optionStyles}
              key={index}
              onPress={item.onPress}
            >
              <Avatar.Image
                style={{ backgroundColor: "white" }}
                source={{
                  uri: item.icon,
                }}
              />
              <Text style={styles.optionText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.optionsRow}>
        {rowsData.secondRow.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.optionStyles}
              key={index}
              onPress={item.onPress}
            >
              <Avatar.Image
                style={{ backgroundColor: "white" }}
                source={{
                  uri: item.icon,
                }}
              />
              <Text style={styles.optionText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.optionsRow}>
        {rowsData.thirdRow.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.optionStyles}
              key={index}
              onPress={item.onPress}
            >
              <Avatar.Image
                style={{ backgroundColor: "white" }}
                source={{
                  uri: item.icon,
                }}
              />
              <Text style={styles.optionText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default HomeDashboard;

const styles = StyleSheet.create({
  optionsContainer: {
    width: Dimensions.get("window").width,
    alignItems: "center",

    paddingBottom: 20,
  },
  optionsRow: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 6,
    justifyContent: "space-between",
  },
  optionStyles: {
    alignItems: "center",
    height: Dimensions.get("window").height / 6,
    width: Dimensions.get("window").width / 3.3,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    borderRadius: 8,
    justifyContent: "center",
  },
  optionText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 8,
  },
});
