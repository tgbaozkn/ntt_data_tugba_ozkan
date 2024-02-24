import { StyleSheet,Dimensions, Platform } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Colors } from "../../../styles";

var {width,height} = Dimensions.get('window');
export const homestyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    
        overflow:"hidden"
    },
    title: {
        fontSize: heightPercentageToDP(2.5),
        color: Colors.pastelbluedark,
        fontWeight: "bold",
        marginBottom: heightPercentageToDP(2),

  
        padding:height*0.02,
        textAlign:"center"
    },
    homecardview: {
        padding: height*0.03,
        borderWidth: 1,
        margin: height*0.01,
        borderRadius: 10,
        borderColor: Colors.pastelorangelittledark,
        backgroundColor: "white",
        
    },
    homecardtitle: {
        fontSize: height * 0.02,
        fontWeight: "800",
        textAlign: "center",
        color:Colors.pastelorangelittledark
    },
    image: {
        width: width * 0.7, 
        resizeMode:"contain"
    }
 
})