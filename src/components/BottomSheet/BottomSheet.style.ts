import { StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Colors } from "../../../styles";

export const bottomsheetstyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  name: {
    fontSize: heightPercentageToDP(3),
    color: Colors.pastelpurpledark,
    textAlign: "center",
    fontStyle: "italic",
     marginBottom:heightPercentageToDP(1)
  },
  image: {
    minHeight: heightPercentageToDP(30),
    width: widthPercentageToDP(70),
    resizeMode: "contain",
     
  },
  description: {
    fontSize: heightPercentageToDP(1.9),
    width: widthPercentageToDP(80),
    textAlign: "center",
    marginBottom:heightPercentageToDP(1)
  },

  othertext: {
    fontSize: heightPercentageToDP(2),
    color: Colors.pastelpurpledark,
    marginBottom:heightPercentageToDP(8)
  }
});
