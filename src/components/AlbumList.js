//imports

import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    //esta es la forma de inicializar state. esto es una class level property 
    //default state seteado.
    state = { albums: [] };
   
    componentWillMount() {
      this.fetchData();
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            //<AlbumDetail key={album.title}>{album.title}</AlbumDetail>
            <AlbumDetail key={album.title} albumProp={album} />
        );
    }

    fetchData = () => 
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(responsedata => this.setState({ albums: responsedata }));
    /*
    fetchData = async () => {
        const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
        this.setState({ albums: JSON.parse(response) });
    }
    */
    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;