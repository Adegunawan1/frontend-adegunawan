import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { ProfileScreen } from "../../screens/home";
import { UnitsScreen } from "../../screens/units";

const Drawer = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#9D9D9D"
      barStyle={{ backgroundColor: "#D3D3D3" }}
      backBehavior="initialRoute"
    >
      <Tab.Screen
        name="Contact"
        component={UnitsScreen}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
