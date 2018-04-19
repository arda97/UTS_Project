import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';
const background = require('./../img/background.jpg');

const pesan = require('./../img/beli.png');
const listBarang = require('./../img/list-barang.png');
const contact = require('./../img/contact.png');



export default class SelamatDatang extends React.Component {

  

  RedirectForm()
  {
    this.props.navigation.navigate('FormView', {
      otherParam: 'tessttt'
    })
  }

  RedirectList()
  {
    this.props.navigation.navigate('ListView')
  }
  
  RedirectCp()
  {
    this.props.navigation.navigate('Cp')
  }

  render() {
    return (
    <ImageBackground source={background} style={styles.containerMain}>

      <View style={styles.box2}>
          
        </View>
        <View style={styles.box3}>

              <View style={styles.keterangan}> 
                <Text style={{color:'white', fontSize: 25, textAlign: 'center' }}> 
                  Dapatkan kemudahan untuk menyewa alat Adventure
                </Text>
              </View>

              <View style={styles.buttonContainer}>

                <TouchableOpacity onPress={() => {this.RedirectForm()}} style={styles.buttonStyle}> 
                    <View style={styles.ButtonImageContainer}> 
                      <Image source={pesan} style={styles.iconStyle} />
                    </View>
                    <View style={styles.buttonKet}>
                        <Text style={styles.textButton}> Pesan </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.RedirectList()}} style={styles.buttonStyle}>
                    <View style={styles.ButtonImageContainer}> 
                      <Image source={listBarang} style={styles.iconStyle} />
                    </View>
                    <View style={styles.buttonKet}>
                        <Text style={styles.textButton}> List Barang </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.RedirectCp()}} style={styles.buttonStyle}> 
                    <View style={styles.ButtonImageContainer}>
                      <Image source={contact} style={styles.iconStyle} />
                    </View>
                    <View style={styles.buttonKet}>
                      <Text style={styles.textButton}> Help </Text>
                    </View>
                </TouchableOpacity>
                
              </View>

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
  box1: {
    flex: 0.5,
    backgroundColor: '#0066FF',
  },
   box2: {
    flex: 3,
    marginTop: 6,
    marginRight: 10,
    marginLeft: 10,
  },
   box3: {
    flex: 3.5,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginTop: 1,
  },
  textInputStyle: {
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
  },
  buttonStyle: {
    flex: 1,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: 'rgba(255, 255, 255,0.4)',
    justifyContent: 'center',
    borderRadius: 5,
    shadowRadius: 20,
    borderColor: 'rgba(126, 12, 175,0.5)',
    borderWidth: 4,
    flexDirection: 'column',
  },
  keterangan: {
    flex: 1,
    backgroundColor: 'rgba(1, 3, 7,0.6)',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderColor: 'rgba(168, 24, 173,0.6)',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 3,
  }, 
  iconStyle: {
    height: 70,
    width: 70,
  },
  buttonKet: {
    flex: 1.3,
    backgroundColor: 'rgba(255, 0, 255,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonImageContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    alignItems: 'center',
    backgroundColor: '#FFAB00',
    borderColor: '#FFAB00',
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  textButton: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
