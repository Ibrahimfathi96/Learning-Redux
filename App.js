import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Home from "./Home";
import About from "./About";

const store = createStore(combineReducers({ counterReducer }));
const Stack = createNativeStackNavigator();
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "Counter/increment":
      return {
        ...state,
        value: state.value + 1,
      };
    case "Counter/decrement":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome Back Home" }}
          />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
