import { View, Text, ViewStyle, Animated, Image } from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
import { bottomsheetstyle } from "./BottomSheet.style";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Portal, PortalHost } from "@gorhom/portal";
import { useReducedMotion } from "react-native-reanimated";
import { Colors } from "../../../styles";
type Props = {
  show?: boolean;
  item?: any;
  OnClick?: () => void;
  bottomSheetRef?: any;
  snapPoints?: any;
  index?: number;
};

const BottomSheetComp = (props: Props) => {
  const snapPoints = useMemo(() => [1, "50%"], []); //React.useMemo kullanarak, bu snap noktaları bir kez oluşturulur ve daha sonra yeniden hesaplanmaz. Bu, performansı artırabilir, çünkü snap noktaları her yeniden render işleminde yeniden hesaplanmak zorunda kalmaz.
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
          source={{ uri: props.item.imageUrl }}
          style={bottomsheetstyle.image}
        />
        <Text style={bottomsheetstyle.name}>{props.item.name}</Text>
        <Text style={bottomsheetstyle.description}>{props.item.description}</Text>

          
    
          <Text  style={bottomsheetstyle.othertext}>{props.item.shippingMethod}  {props.item.price} TL</Text>
      
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetComp;
