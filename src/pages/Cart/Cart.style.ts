import { StyleSheet,Dimensions } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Colors } from "../../../styles";

var {width,height} = Dimensions.get('window');
export const cart = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:Colors.pastelyellowlight,
        margin: heightPercentageToDP(1),
        padding:heightPercentageToDP(2)
    },
 
    image: {
        height: height * 0.07,
        width: width * 0.15,
        borderRadius: 30,
        marginHorizontal: widthPercentageToDP(2)
       
      
    },
    totalbeltcont: {
        width: width * 1,
        height: height * 0.05,
        backgroundColor: Colors.pastelorange,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    totalbelttext: {
        fontSize:heightPercentageToDP(2)
    }

})