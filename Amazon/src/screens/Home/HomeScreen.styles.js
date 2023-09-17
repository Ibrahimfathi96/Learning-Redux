import { StyleSheet } from "react-native";
import Fonts from "../../Theme/fonts";
import Colors from "../../Theme/Colors";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  resultsText: {
    fontSize: Fonts.Sizes.size18,
    fontWeight: Fonts.FontWeight.semiBold,
    padding: 10,
  },
  address: {
    padding: 16,
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },
  renderedList: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 20,
    marginVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: Colors.lighterGrey,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
  },
  cardImageView: {
    flex: 2,
  },
  cardTextView: {
    flex: 3,
  },
  image: {
    width: width * 0.3,
    height: width * 0.2,
  },
  price: {
    fontWeight: Fonts.FontWeight.semiBold,
    fontSize: Fonts.Sizes.size18,
  },
  egp: {
    alignSelf: "flex-end",
    fontSize: Fonts.Sizes.size14,
  },
});

export default styles;
