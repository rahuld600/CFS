import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from "react-native-vector-icons/MaterialIcons";
import HomePage from "./Screens/HomePage";
import Contact from "./Screens/Contact";
import MyOrders from "./Screens/MyOrders";

const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => {
  const TabsData = [
    {
      id: "1",
      name: "Home",
      component: HomePage,
      icon: "home",
    },
    {
      id: "2",
      component: MyOrders,
      name: "My Orders",
      icon: "restore",
    },
    {
      id: "3",
      component: Contact,
      name: "Contact",
      icon: "contact-support",
    },
  ];

  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#014b78" }}
      initialRouteName="Home"
      activeColor="#fff"
      sceneAnimationEnabled
    >
      {TabsData.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            component={item.component}
            name={item.name}
            options={{
              tabBarLabel: item.name,
              tabBarIcon: ({ color }) => (
                <Icon name={item.icon} color={color} size={26} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default MainTabs;
