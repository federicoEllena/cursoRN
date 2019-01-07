import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

/*Este componente puede armarse como componente funcional, no de clase. Solamente mostrara informacion,
no van a ser necesarios ciclos de vida ni state*/

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { albumInfoStyle, 
            thumbnailImageStyle, 
            thumbnailImageContainerStyle,
            albumInfoTextStyle,
            imageStyle
        } = styles;
    
    return (
        <Card>
            <CardSection>
                <View style={thumbnailImageContainerStyle}>
                    <Image source={{ uri: thumbnail_image }} style={thumbnailImageStyle} />
                </View>
                <View style={albumInfoStyle}>
                    <Text style={albumInfoTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image source={{ uri: image }} style={imageStyle} />
            </CardSection>

            <CardSection>
                <Button />
            </CardSection>
        </Card>
    )
}

const styles = {

    albumInfoStyle: {
        flexDirection: 'column',
        justifyContent:'space-around'
    },
    albumInfoTextStyle: {
        fontSize: 18
    },
    thumbnailImageStyle: {
        height: 50,
        width: 50
    },
    thumbnailImageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;