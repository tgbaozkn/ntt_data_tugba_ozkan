import { View, Text } from 'react-native'
import React from 'react'
import { loadingerror } from '../Loading/Loading.style'

type Props = {
 
    errormessage: string | undefined
}

const Error = (props: Props) => {
    return (
      props.errormessage? 
            <View style={ loadingerror.container}>
          <Text style={loadingerror.message}>{ props.errormessage}</Text>
            </View>
            :
            null
  )
}

export default Error