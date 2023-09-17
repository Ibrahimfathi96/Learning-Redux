import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile/ProfileScreen";
import navigationOptions from "./NavigationOptions";
export default function ProfileNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={navigationOptions}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
