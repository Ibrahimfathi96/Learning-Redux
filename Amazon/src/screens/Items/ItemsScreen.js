import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../Items/ItemsScreen.etyles";
import { useDispatch, useSelector } from "react-redux";

export default function Items({ route }) {
  const item = route.params;
  const dispatch = useDispatch();
  console.log("item: ", item);

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Brand: {item.brand}</Text>
      <Text style={styles.desc}>Brand: {item.description}</Text>
      <Image source={{ uri: item.imageLink }} style={styles.image} />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.egp}>EGP</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch({ type: "cart/add", payload: item });
        }}
      >
        <Text style={styles.addToCart}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}
