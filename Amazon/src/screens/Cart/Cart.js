import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./Cart.styles";
import Fonts from "../../Theme/fonts";

export default function Cart() {
  const [subTotal, setSubTotal] = useState(0);
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => {
    console.log("updating....");
    console.log("Current Cart Items: ", state.cartReducer);
    let tempCartItems = state.cartReducer;
    let tempSubtotal = 0;
    for (let i = 0; i < tempCartItems.length; i++) {
      tempSubtotal += tempCartItems[i].price * tempCartItems[i].quantity;
    }
    if (tempSubtotal != subTotal) setSubTotal(tempSubtotal);
    return tempCartItems;
  });
  console.log("CartItems: ", cartItems);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={styles.address}>
          <Icon name="map-marker-alt" size={Fonts.Sizes.size18} />
          <Text
            style={{
              fontSize: Fonts.Sizes.size14,
              fontWeight: Fonts.FontWeight.semiBold,
            }}
          >
            {"  "}
            Delivery To Cairo - Ibrahim Fathi
          </Text>
        </View>
        <Text style={styles.subTotal}>Subtotal: {subTotal}</Text>
        <TouchableOpacity style={styles.proceedToBuyButton}>
          <Text style={styles.proceedToBuyText}>Proceed to buy</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cartItems}
        numColumns={1}
        contentContainerStyle={{
          alignContent: "center",
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatListCard}>
              <View style={styles.imageAndButtonView}>
                <Image source={{ uri: item.imageLink }} style={styles.image} />
                <View style={styles.addAndRemoveView}>
                  <TouchableOpacity
                    style={styles.addAndRemoveButtons}
                    onPress={() => {
                      dispatch({ type: "cart/add", payload: item });
                    }}
                  >
                    <Text style={styles.addAndRemoveText}>+</Text>
                  </TouchableOpacity>
                  <View style={styles.quantity}>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.addAndRemoveButtons}
                    onPress={() => {
                      dispatch({ type: "cart/remove", payload: item });
                    }}
                  >
                    <Text style={styles.addAndRemoveText}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flex: 3 }}>
                <Text>{item.description}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.egp}>EGP</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.brandText}>Brand : </Text>
                  <Text style={styles.brandText}>{item.brand}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
