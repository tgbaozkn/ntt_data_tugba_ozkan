import { StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Colors } from "../../../styles";

export const bottomsheetstyle = StyleSheet.create({
  container: {
    position: "absolute",
    elevation: 20,
    zIndex: 20,
    bottom: heightPercentageToDP(0),
    width: widthPercentageToDP(90),
    left: widthPercentageToDP(5),
    borderRadius: 15,
    backgroundColor: Colors.pastelpurpledark,
  },
});
