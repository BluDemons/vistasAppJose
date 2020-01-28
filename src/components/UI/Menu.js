import React, {Component} from 'react';
import { Modal, ImageBackground, Text, TextInput, SafeAreaView, TouchableHighlight, View, Alert, Button, StyleSheet} from 'react-native';

  const image = 'https://img.freepik.com/psd-gratis/superposicion-sombra-sobre-fondo-textura-madera-blanca_1048-10825.jpg?size=626&ext=jpg'

  export default class Menu extends Component {
    
    state = {
      modalVisible: false,
    };
  
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
  
    render() {
      return (
        <ImageBackground source={{uri: image}} style={{width: '100%', height: '100%'}}>
        <SafeAreaView style={styles.container}>
        <View>
          <Modal 
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={styles.modalStyle}>
              <View>
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
