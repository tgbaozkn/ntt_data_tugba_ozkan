import { View, Text, Image } from "react-native";
import React from "react";
import { bottomsheetstyle } from "./BottomSheet.style";
import
{ BottomSheetModal } from "@gorhom/bottom-sheet";

import { useReducedMotion } from "react-native-reanimated";

import MapView from "react-native-maps";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
type Props = {
  show?: boolean;
  item?: any;
  OnClick?: () => void;
  bottomSheetRef?: any;
  snapPoints?: any;
  index?: number;
  isInHome?: boolean;
  latitude?: string;
  longtitude?: string;
};

const BottomSheetComp = (props: Props) => {
  
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModal
      ref={props.bottomSheetRef}
      index={props.index}
      snapPoints={props.snapPoints}
      enablePanDownToClose={true}
      animateOnMount={!useReducedMotion}
      containerStyle={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      onChange={handleSheetChanges}>
      <View style={bottomsheetstyle.container}>
        <Image
          source={{ uri: props.item?.imageUrl }}
          style={bottomsheetstyle.image}
        />
        <Text style={bottomsheetstyle.name}>{props.item?.name}</Text>
        <Text style={bottomsheetstyle.description}>
          {props.item?.description}
        </Text> 
        {props.isInHome? <Image source={require("../../../assets/images/trmap.jpg")} style={{ height: heightPercentageToDP(20), resizeMode: "stretch", width: widthPercentageToDP(80) }} />:null}

        {props.latitude && props.longtitude? (
          <View style={{ height: "100%", width: "100%" }}>
        
            <Text style={{ textAlign: "center" }}>Konum bilgileri: Enlem:{props.latitude}, Boylam :{props.longtitude}</Text>
            
            <MapView
              style={{position:"absolute",top:0}}
              initialRegion={{
              latitude: parseFloat(props.latitude),
              longitude: parseFloat(props.longtitude),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            />
            
        </View>
        ) : null}
        {props.item?.price ? <Text style={bottomsheetstyle.othertext}>
          {props.item?.shippingMethod} {props.item?.price} TL
        </Text> : null}
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetComp;
