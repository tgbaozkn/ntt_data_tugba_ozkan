import { StyleSheet,Dimensions } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Colors } from "../../../styles";

export const buttonstyle = StyleSheet.create({
    container: {
     
        width: widthPercentageToDP(50),
        marginHorizontal: widthPercentageToDP(25),
        marginVertical: heightPercentageToDP(5),
        backgroundColor:"rgba(255,255,255,1)"
        
    },
    title: {
        fontSize: heightPercentageToDP(3.5),
        color: Colors.pastelpurpledark,
        textAlign: "center",
       padding:10,
        fontWeight:"bold"
    },
   
})