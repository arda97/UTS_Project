import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';

const background = require('./../img/background.jpg');


export default class formView extends React.Component {

  static navigationOptions = {
    title: 'PESAN DISINI : ',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

constructor (props){
    super(props)
    this.state = {
      TextInputName: '',
      TextInputEmail: '',
      TextInputPhone: '',
      TextInputPassword: ''
    }
  }

  Input = () => {
    const {nama_barang} = this.state;
    const {lama_penyewaan} = this.state;
    const {harga} = this.state;

    fetch('http://api.ifreethink.net/z1515051025/postapi.php',{
      method:'POST',
      header : {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
      body : JSON.stringify({
        nama_barang: nama_barang,
        lama_penyewaan: lama_penyewaan,
        harga: harga,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
          Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      })
  }
  
DataUsers = () => {
  this.props.navigation.navigate('ListView');
}


  render() {
    return (
      <ImageBackground source={background} style={styles.containerMain}>
              <View style={styles.BOX2}> 
                  <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder="Nama barang"
                  onChangeText = {TextInputValue => this.setState ({nama_barang: TextInputValue})}
                  placeholderTextColor="rgba(0, 0, 0, 0.7)"
                  />
                  <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Lama penyewaan"
                    onChangeText = {TextInputValue => this.setState ({lama_penyewaan: TextInputValue})}
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    />
                  <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Harga"
                    keyboardType='numeric'
                    onChangeText = {TextInputValue => this.setState ({harga: TextInputValue})}
                    placeholderTextColor="rgba(0, 0, 0, 0.7)"
                    />        

                    <TouchableOpacity activeopacity = {.4} style={styles.button} onPress={this.Input}>
                       <Text style={styles.buttonText}>Pesan</Text>
                  </TouchableOpacity>

              </View>
          
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
  },
  BOX1: {
    flex: 1,
    backgroundColor:'white',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  BOX2: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    width:320,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius:25,
    paddingHorizontal: 10,
    fontSize:16,
    color:'#000000',
    marginVertical:5,
    padding:5
  },
  button:{
    width:250,
    backgroundColor:'#BDBDBD',
    borderRadius:25,
    marginVertical:3,
    paddingVertical:3
  },
  buttonText:{
    fontSize:18,
    fontWeight:'500',
    color:'#424242',
    textAlign:'center'
  }
});