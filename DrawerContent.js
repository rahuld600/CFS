import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialIcons";

export function DrawerContent(props) {
  const DrawerData = [
    {
      id: "home",
      name: "Home",
      color: "#014b78",
      icon: "home",
      onPress: () => {
        props.navigation.navigate("Home");
      },
    },
    {
      id: "myOrders",
      name: "My Orders",
      color: "#39A2DB",
      icon: "restore",
      onPress: () => {
        props.navigation.navigate("MyOrders");
      },
    },
    {
      id: "payment",
      name: "Payment",
      color: "#185ADB",
      icon: "payment",
      onPress: () => {},
    },
    {
      id: "notifications",
      name: "Notifications",
      color: "#D83A56",
      icon: "notifications",
      onPress: () => {},
    },
    {
      id: "privacyPolicy",
      name: "Privacy Policy",
      color: "#558776",
      icon: "policy",
      onPress: () => {},
    },
    {
      id: "contactUs",
      name: "Contact Us",
      color: "#E5D549",
      icon: "contact-support",
      onPress: () => {
        props.navigation.navigate("Contact");
      },
    },
    {
      id: "settings",
      name: "Settings",
      color: "#185ADB",
      icon: "settings",
      onPress: () => {},
    },
    {
      id: "website",
      name: "Our Website",
      color: "#A3A847",
      icon: "language",
      onPress: () => {},
    },
  ];
  const colors = {
    topBGColor: "#014b78",
    Home: "#1338be",
    covid: "#558776",
    payment: "#185ADB",
    myRides: "#39A2DB",
    inviteFriends: "#DA0037",
    powerPass: "#E5D549",
    notifications: "#D83A56",
    insurance: "#A3A847",
    settings: "#185ADB",
    support: "#BB371A",
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity
            style={{ backgroundColor: colors.topBGColor, paddingBottom: 15 }}
            onPress={() => props.navigation.navigate("Profile")}
          >
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <View>
                  <Avatar.Image
                    size={80}
                    source={require("./assets/profileAvatar.png")}
                  />
                </View>
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title style={styles.title}>User</Title>
                  <Caption style={styles.caption}>+XX XXXXXXXXXX</Caption>
                  <Caption style={styles.caption}>Edit profile</Caption>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Drawer.Section style={styles.drawerSection}>
            {DrawerData.map((item, i) => {
              return (
                <Drawer.Item
                  key={i}
                  icon={({ color, size }) => (
                    <Icon
                      name={item.icon}
                      color="white"
                      size={15}
                      style={{
                        backgroundColor: item.color,
                        borderRadius: 20,
                        padding: 8,
                      }}
                    />
                  )}
                  label={item.name}
                  onPress={item.onPress}
                />
              );
            })}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={24} />
          )}
          label="Log Out"
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: "white",
    marginTop: 6,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {},
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
