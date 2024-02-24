import { View, Text } from 'react-native'
import React from 'react'
import { loadingerror } from './Loading.style'

type Props = {

    loadingmessage? :string
}

const Loading = (props: Props) => {
    return (
      
        <View style={loadingerror.container} >
            <Text style={loadingerror.message}>{props.loadingmessage}</Text>
        </View>
    );
}

export default Loading