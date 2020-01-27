import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
//import Routes from './routes';
import Menu from './src/components/UI/Home'

class reactTutorialApp extends Component {
   render() {
      return (
         <Menu />
      )
   }
}
export default reactTutorialApp
//AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)