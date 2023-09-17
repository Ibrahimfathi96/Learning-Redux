import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HomeScreen.styles";
import Fonts from "../../Theme/fonts";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function Home({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://omardiaa.com/YouTube/ReactNative/amazonProducts.php", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch({ type: "ads/update", payload: res });
        console.log(res);
      });
  }, []);
  const ads = useSelector((state) => {
    return state.adsReducer[0];
  });
  console.log("Ads: ", ads);
  return (
    <View style={styles.container}>
      <Text style={styles.resultsText}>Results</Text>
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
      <FlatList
        data={ads}
        numColumns={1}
        contentContainerStyle={{
          alignContent: "center",
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.renderedList}
              onPress={() => {
                navigation.navigate("Items", item);
              }}
            >
              <View style={styles.cardImageView}>
                <Image source={{ uri: item.imageLink }} style={styles.image} />
              </View>
              <View style={styles.cardTextView}>
                <Text numberOfLines={3} ellipsizeMode="tail">
                  {item.description}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.egp}>EGP</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
