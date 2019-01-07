import React from 'react';

/*import destructure*/
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

/*crear un componente, un componente es una funcion de javascript que retorna JSX*/
/*esta sintaxis se corresponde a JSX*/
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

/*renderizarlo*/
AppRegistry.registerComponent('albumes', () => App);
