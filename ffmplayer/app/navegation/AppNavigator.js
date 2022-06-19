import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import AudioList from "../screens/AudioList/index";
import Player from "../screens/Player/index";
import PlayList from "../screens/PlayList";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AudioList"
        component={AudioList}
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="headset" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="play" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="playlist-music"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
