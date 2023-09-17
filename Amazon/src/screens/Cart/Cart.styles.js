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
  address: {
    padding: 16,
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },
  proceedToBuyButton: {
    backgroundColor: Colors.yellow,
    borderRadius: 40,
    padding: 12,
    margin: 14,
    borderWidth: 0.4,
    borderColor: Colors.lightGrey,
  },
  proceedToBuyText: {
    fontSize: Fonts.Sizes.size16,
    fontWeight: Fonts.FontWeight.semiBold,
    textAlign: "center",
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
  subTotal: {
    fontSize: Fonts.Sizes.size18,
    fontWeight: Fonts.FontWeight.semiBold,
    paddingLeft: 16,
  },
  flatListCard: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 20,
    marginVertical: 6,
    paddingHorizontal: 14,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
  },
  addAndRemoveView: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.lightGrey,
  },
  addAndRemoveButtons: {
    flex: 2,
  },
  addAndRemoveText: {
    fontSize: Fonts.Sizes.size26,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: Fonts.FontWeight.semiBold,
  },
  quantity: {
    flex: 3,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#fff",
    borderRightWidth: 0.4,
    borderLeftWidth: 0.4,
    borderColor: Colors.lightGrey,
  },
  quantityText: {
    fontSize: Fonts.Sizes.size20,
    fontWeight: Fonts.FontWeight.regular,
  },
  brandText: {
    fontSize: Fonts.Sizes.size12,
    fontWeight: Fonts.FontWeight.semiBold,
  },
  imageAndButtonView: {
    flex: 2,
    justifyContent: "center",
    alignContent: "flex-start",
    alignItems: "center",
    paddingRight: 10,
  },
});
export default styles;
