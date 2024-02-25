import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Colors } from "../../../styles";

export const loadingerror = StyleSheet.create({
    container: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        alignSelf:"center"
    },
    message: {
        fontSize: 25,
        color: Colors.pastelpurpledark,
        textAlign: "center",
        marginBottom: heightPercentageToDP(1),
        fontWeight:"bold"
    },
   
})