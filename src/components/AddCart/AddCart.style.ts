import { StyleSheet,Dimensions } from "react-native";

import { Colors } from "../../../styles";

var {width,height} = Dimensions.get('window');
export const addcartstyle = StyleSheet.create({
    container: {
        height: height * 0.1,
        flexDirection: "row",
        marginVertical: height * 0.01,
        justifyContent: "center",
      alignItems:"center"
        
     
    },
    text: {
        fontSize: height*0.02,
        color: Colors.pastelpurpledark,
        
        
        fontWeight:"bold"
    },
    icon: {
       color:Colors.pastelpurpledark
    
      
    }
})