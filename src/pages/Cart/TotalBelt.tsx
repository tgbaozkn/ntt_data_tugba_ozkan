import {  Text } from 'react-native'
import React from 'react'
import { cart } from './Cart.style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type Props = {
    total?: number;
    text: string;
}

const TotalBelt = (props: Props) => {
    const buyingProcess = () => {
        props.total?null : alert("Satın Alma İşleminiz Gerçekleşiyor..")
    }
  return (
      <TouchableWithoutFeedback  onPress={buyingProcess} style={cart.totalbeltcont}>
          <Text style={cart.totalbelttext}>{ props.text}</Text>
          {props.total ? <Text  style={cart.totalbelttext}>{props.total } TL</Text> : null}
    </TouchableWithoutFeedback>
  )
}

export default TotalBelt