import {
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonstyle } from "./Button.style";

type Props = {
  text: string;
  onPress: () => void;
  loading?: boolean;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity style={props.viewStyle ? props.viewStyle :buttonstyle.container} onPress={props.onPress}>
      {props.loading ? (
        <ActivityIndicator color="gray" />
      ) : (
        <Text style={props.textStyle ? props.textStyle :buttonstyle.title}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
