import { Text, View } from "react-native";
import React from "react";
import { inputstyle } from "./Input.style";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  placeholder: string;
  onChangeText: (val: string) => void;
  iconName: any;
    isPassword: boolean;
  size: number;
  inputtext: string;
  value: string;
};

const Input = (props: Props) => {
  return (
    <View style={inputstyle.container}>
      <Ionicons name={props.iconName} size={props.size} />
      <Text style={inputstyle.label}>{props.inputtext} : </Text>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        placeholderTextColor={"gray"}
        style={inputstyle.input}
        secureTextEntry={props.isPassword}
        
      />
    </View>
  );
};

export default Input;
