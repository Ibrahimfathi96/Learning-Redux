import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/HomeScreen";
import Items from "../screens/Items/ItemsScreen";
import navigationOptions from "./NavigationOptions";

export default function HomeNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={navigationOptions}
      ></Stack.Screen>
      <Stack.Screen
        name="Items"
        component={Items}
        options={navigationOptions}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
