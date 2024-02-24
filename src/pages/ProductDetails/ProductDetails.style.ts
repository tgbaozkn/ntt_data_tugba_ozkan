import { StyleSheet,Dimensions, Platform } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Colors } from "../../../styles";

var {width,height} = Dimensions.get('window');
export const productdetailstyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems:"center",
        backgroundColor:"white",
        overflow: "hidden",
        flexDirection: "row",
        margin: 10,
        padding:20
    },
    image: {
        height: heightPercentageToDP(1),
        width: widthPercentageToDP(3),
        resizeMode: "contain",
        borderRadius: 30,
        borderWidth:0.1
    },
    descView: {
        width: width * 0.5,
    
        marginHorizontal:width*0.05
    },
    decText: {
        color: Colors.pastelpurpledark,
        textAlign: "left",
        marginBottom: height * 0.02,
        marginTop:height*0.01,
        fontSize:heightPercentageToDP(2)
    }
 
})