import { StyleSheet } from "react-native";
import Fonts from "../../Theme/fonts";
import Colors from "../../Theme/Colors";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 6,
    paddingTop: 6,
  },
  brand: {
    fontSize: Fonts.Sizes.size16,
    fontWeight: Fonts.FontWeight.bold,
    textAlign: "left",
  },
  desc: {
    fontSize: Fonts.Sizes.size18,
    paddingVertical: 10,
  },
  image: {
    width: width * 0.9,
    height: width * 0.6,
    alignSelf: "center",
  },
  price: {
    fontWeight: Fonts.FontWeight.semiBold,
    fontSize: Fonts.Sizes.size26,
  },
  egp: {
    alignSelf: "flex-end",
    fontSize: Fonts.Sizes.size14,
  },
  addToCart: {
    fontSize: Fonts.Sizes.size16,
    color: Colors.blue,
  },
});
export default styles;
