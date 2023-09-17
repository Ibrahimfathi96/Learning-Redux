import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart/Cart";
import navigationOptions from "./NavigationOptions";
export default function CartNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={navigationOptions}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
