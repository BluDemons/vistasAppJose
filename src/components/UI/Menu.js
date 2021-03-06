import React, {Component} from 'react'
import { Modal, ImageBackground, Text, TextInput, SafeAreaView, TouchableHighlight, View, Alert, Button, StyleSheet, Image} from 'react-native'
//import ImagePicker from 'react-native-image-picker'


  const image = 'https://img.freepik.com/psd-gratis/superposicion-sombra-sobre-fondo-textura-madera-blanca_1048-10825.jpg?size=626&ext=jpg'
  //const fondo = require('../../assets/fondo.jpg')

  export default class Menu extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        filePath: {},
      }
    }

    state = {
      modalVisible: false,
    };
  
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
//----------Esta seccion es para subir fotos desde el celular
  //   chooseFile = () => {
  //     var options = {
  //       title: 'Select Image',
  //       customButtons: [
  //         { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
  //       ],
  //       storageOptions: {
  //         skipBackup: true,
  //         path: 'images',
  //       },
  //   };

  //   ImagePicker.showImagePicker(options, response => {
  //     console.log('Response = ', response);
 
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //       alert(response.customButton);
  //     } else {
  //       let source = response;
  //       this.setState({
  //         filePath: source,
  //       });
  //     }
  //   });
  // };
//-----------Fin de seccion  
    render() {
      return (
      <ImageBackground source={{uri:image}} style={{width: '100%', height: '100%'}}>
        <SafeAreaView style={styles.container}>
        <View>
          <Modal 
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert('Modal has been closed.');
            }}>
            <View style={styles.modalStyle}>
              <View>
                <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
                <Text>Producto:</Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Escribe aquí el producto"
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
                <Text>Descripción:</Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Escribe aquí la descripción"
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
                <Text>Precio:</Text>
                <TextInput
                  style={{height: 40}}
                  placeholder="Escribe aquí el precio"
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Atrás</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <Text style={styles.textMenu}>Crear menú de la Semana</Text>
          <View style={styles.separator}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Lunes</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Martes</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Miércoles</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Jueves</Text>
          </TouchableHighlight>
          <View style={styles.separator1}/>
          <TouchableHighlight style={styles.touchStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text style={styles.text}>Viernes</Text>
          </TouchableHighlight>          
        </View>
        </SafeAreaView>
        </ImageBackground>
      );
    }
  } 
    
  const styles = StyleSheet.create({
        container: {
            flex:1,
            alignItems:'center',
            marginTop: 50,
        },
        text: { 
            textAlign: 'center',
            fontWeight: '100',
            color: '#eee' 
        },
        textMenu:{
            fontSize: 20,
            marginTop:0
        },
        touchStyle:{
            backgroundColor: '#000',
            borderColor:'#eee',
            padding:10,
            borderRadius:5,
        },
        separator: {
            marginVertical: 10,
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
        separator1: {
            marginVertical: 10,
            borderBottomColor: '#eee',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
        modalStyle:{
          flex:1,
          alignItems:'center',
          marginTop: 100,
        }
  })
