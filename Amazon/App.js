import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/Navigation/TabsNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import adsReducer from "./src/Reducers/AdsReducer";
import cartReducer from "./src/Reducers/CartReducer";

export default function App() {
  const store = createStore(combineReducers({ adsReducer, cartReducer }));
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
