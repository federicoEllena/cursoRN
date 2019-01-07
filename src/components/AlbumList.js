//imports

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    //esta es la forma de inicializar state. esto es una class level property 
    //paso1: default state seteado
    state = { albums: [] };
    //paso2: actualizar

    componentWillMount() {
      this.fetchData();
    }

    fetchData = () => 
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => JSON.parse(response))
        .then(data => this.setState({ albums: data }));
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
                <Text>Zarasasasa</Text>
            </View>
        );
    }
}

export default AlbumList;
