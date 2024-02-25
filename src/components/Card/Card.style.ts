import { StyleSheet,Dimensions } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Colors } from "../../../styles";

var {width,height} = Dimensions.get('window');
export const card = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:Colors.pastelgreenlight,
        margin: heightPercentageToDP(1),
        padding:heightPercentageToDP(2)
    },
    name: {
        fontSize: 25,
        color: Colors.pastelpurpledark,
        textAlign: "center",
        marginBottom: heightPercentageToDP(1),
        fontWeight:"bold"
    },
    image: {
        height: height * 0.2,
        width:width*0.3,
        resizeMode: "cover",
      
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
        fontSize:heightPercentageToDP(1.8)
    },
    marginten: {
        margin:10
    },
    smallname: {
        textAlign: "left",
        fontSize: heightPercentageToDP(2),
        marginBottom:5
    }
})