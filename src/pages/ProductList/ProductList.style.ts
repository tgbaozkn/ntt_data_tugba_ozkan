import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Colors } from "../../../styles";

export const buttonstyle = StyleSheet.create({
    container: {
     
        width: widthPercentageToDP(40),
        marginHorizontal:widthPercentageToDP(5),
        backgroundColor:Colors.pastelpurpledark
        
    },
    title: {
        fontSize: heightPercentageToDP(1.5),
        color:"white",
        textAlign: "center",
       padding:10,
        fontWeight:"bold"
    },
   
})