import { View, Text, ViewStyle,Animated } from 'react-native'
import React from 'react'
import { bottomsheetstyle } from './BottomSheet.style'

type Props = {
    description: string,
    price: string | number,
    shippingMethod: string,
    containerStyle: ViewStyle
}

const BottomSheet = (props: Props) => {
  return (
    <Animated.View style={[props.containerStyle,bottomsheetstyle.container]}>
          <Text>{ props.description}</Text>
    </Animated.View>
  )
}

export default BottomSheet