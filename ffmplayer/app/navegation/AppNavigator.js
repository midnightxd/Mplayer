import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons, MaterialCommunityIcons, AntDesign, } from "@expo/vector-icons";
import AudioList from "../screens/AudioList/index";
import Player from "../screens/Player/index";
import PlayList from "../screens/PlayList";
import color from "../misc/color";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: color.BOTTOM_TAB_NAVIGATOR,
          borderWidth: 1,
          borderTopColor: color.APP_BG,
        },
      })}
    >
      <Tab.Screen
        name="AudioList"
        component={AudioList}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="headset"
                size={25}
                color={color}
                style={{ marginBottom: -15 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome5 name="compact-disc" size={35} color='red' style={{marginBottom: -10}} /> 
            );
          },
        }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          title: "",
          tabBarIcon: ({ size }) => {
            return (
              <MaterialCommunityIcons
                name="playlist-music"
                size={25}
                color={color.DETAILS_ICONS}
                style={{marginBottom: -10}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
