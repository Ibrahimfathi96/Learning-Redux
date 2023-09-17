import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  let counter = useSelector((state) => {
    return state.counterReducer.value;
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Text>{counter}</Text>
      <Button
        title="Go To ABout"
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text>Go To ABout</Text>
      </Button>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "Counter/increment" });
        }}
      ></Button>
    </View>
  );
};

export default Home;
