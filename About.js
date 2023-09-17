import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const About = ({ navigation }) => {
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
      <Text>About</Text>
      <Text>{counter}</Text>
      <Button
        title="Go Back To Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Go Back To Home</Text>
      </Button>
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({ type: "Counter/decrement" });
        }}
      ></Button>
    </View>
  );
};

export default About;
