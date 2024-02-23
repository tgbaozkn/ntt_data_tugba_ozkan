import { StyleSheet,Dimensions } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Colors } from "../../../styles";

export const loadingerror = StyleSheet.create({
    container: {
        flex: 1,
       
        justifyContent: "center",
        alignItems: "center",
    
    },
    message: {
        fontSize: 25,
        color: Colors.pastelpurpledark,
        textAlign: "center",
        marginBottom: heightPercentageToDP(1),
        fontWeight:"bold"
    },
   
})