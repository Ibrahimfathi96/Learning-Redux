import { configureStore } from "@reduxjs/toolkit";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CounterScreen from "./Counter";
import { Provider } from "react-redux";
import CounterReducer from "./reducers/CounterSlice";
import authReducer from "./reducers/AuthSlice";

const Stack = createNativeStackNavigator();
const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: authReducer
  }
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CounterScreen" component={CounterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
