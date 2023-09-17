import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";
import CartNavigator from "./CartNavigator";
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "../Theme/Colors";
export default function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="home"
                size={22}
                color={focused ? Colors.secondary : Colors.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="user"
                size={22}
                color={focused ? Colors.secondary : Colors.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="shopping-cart"
                size={22}
                color={focused ? Colors.secondary : Colors.black}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
