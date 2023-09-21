import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { increase, decrease, reset } from "./reducers/CounterSlice";
import { login, logout } from "./reducers/AuthSlice";

/**
 * useEffect ==> Dispatch (ref = 1 )
 * update state 
 * re-evaluate ==> (ref = 2 )
 * re-render ==> loop again to start useEffect because the reference has changed
 * 
 * useEffect ==> Dispatch (ref = 2 )
 * update state 
 * re-evaluate ==> (ref = 3 )
 * re-render ==> loop again to start useEffect 
 * 
 * useEffect ==> Dispatch (ref = 3 )
 * update state 
 * re-evaluate ==> (ref = 4 )
 * re-render ==> loop again to start useEffect
 * 
 * (infinte loop)
 * 
 * *hint*
 * re-evaluate ==>> counter handler ref=1 ==> ref=2  ==> ref=3
 */

function Counter() {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();

  const counterHandler = useCallback(
    (type, value) => {
      if (type === "increase") {
        dispatch(increase(value));
      } else if (type === "decrease") {
        dispatch(decrease(value));
      } else {
        dispatch(reset());
      }
    },
    [dispatch]
  );

  useEffect(
    () => {
      counterHandler("increase", 20);
    },
    [counterHandler]
  );

  function isLoggedIn() {
    return globalState.auth.isLogged;
  }
  function loginHandler(status) {
    if (status) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  }

  return (
    <View style={styles.container}>
      {isLoggedIn() &&
        <View>
          <Text style={styles.conunterText}>
            Counter :{globalState.counter.value}
          </Text>
          <TouchableOpacity
            onPress={() => {
              console.log("Increased");
              counterHandler("increase", 7);
            }}
            style={styles.button}
          >
            <Text style={styles.text}>INCREASE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("Decreased");
              counterHandler("decrease", 2);
            }}
            style={styles.button}
          >
            <Text style={styles.text}>DECREASE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("RESET");
              counterHandler();
            }}
            style={styles.button}
          >
            <Text style={styles.text}>RESET</Text>
          </TouchableOpacity>
        </View>}

      <TouchableOpacity
        onPress={() => {
          loginHandler(isLoggedIn());
        }}
        style={styles.button}
      >
        <Text style={styles.text}>
          {isLoggedIn() ? "Logout" : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Counter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: "70%",
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "blue",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 26,
    marginVertical: 30
  },
  conunterText: {
    fontSize: 26,
    fontWeight: "600"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});
