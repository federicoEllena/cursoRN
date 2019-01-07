import React from 'react';
import { View, Text } from 'react-native';

/*Este componente puede armarse como componente funcional, no de clase. Solamente mostrara informacion,
no van a ser necesarios ciclos de vida ni state*/

const AlbumDetail = (props) => {
    return(
        <View>
            <Text>{props.albumProp.title}</Text>
        </View>
    )
}

export default AlbumDetail;