import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import MainTabs from "./MainTabs";

import { DrawerContent } from "./DrawerContent";

import Profile from "./Screens/Profile";
import MyOrders from "./Screens/MyOrders";
import ServicesStack from "./Screens/Services";
import Contact from "./Screens/Contact";

const Drawers = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Login"
    >
      <Drawer.Screen
        name="Home"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="MyOrders"
        component={MyOrders}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Services" component={ServicesStack} />
    </Drawer.Navigator>
  );
};

export default Drawers;
