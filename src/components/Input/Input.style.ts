import { StyleSheet,Dimensions, Platform } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Colors } from "../../../styles";

var {width,height} = Dimensions.get('window');
export const inputstyle = StyleSheet.create({
    container: {
       
        borderRadius: 20,

        alignItems: "center",
        backgroundColor:Colors.pastelgreenlight,
        margin: heightPercentageToDP(1),
        padding: Platform.OS==="ios"? heightPercentageToDP(2):heightPercentageToDP(.8),
        width: width * 0.9,
        marginHorizontal:width*0.05,
        paddingLeft:10,
        flexDirection: "row",
  
    },
    label: {
        textAlign: "left",
      
        fontSize: height * 0.018 ,
        marginLeft:5
    },
    input: {
       
        padding: height * 0.015,
        color: "black",
       
    }
 
})