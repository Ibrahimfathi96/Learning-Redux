import { TextInput, View, Text, TouchableOpacity } from "react-native";
import colors from "../Theme/Colors";
import fonts from "../Theme/fonts";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width } = Dimensions.get("window");
const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
    height: 120,
    elevation: 0,
  },
  headerBackTitleStyle: {
    fontSize: 10,
  },
  headerTitle: () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            height: 50,
            width: 0.9 * width,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: colors.grey,
            backgroundColor: colors.white,
            shadowColor: colors.black,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.3,
            shadowRadius: 20,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{ width: "90%", fontSize: fonts.Sizes.size16 }}
          ></TextInput>
          <Icon name="search" size={fonts.Sizes.size18} />
        </View>
      </View>
    );
  },
};

export default navigationOptions;
