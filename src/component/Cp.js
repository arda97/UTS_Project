import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';

const background = require('./../img/background.jpg');
const facebook = require('./../img/facebook.png');
const instagram = require('./../img/instagram.png');
const Youtube_icon = require('./../img/Youtube_icon.png');

export default class Cp extends React.Component {

 

  render() {
    return (
      <ImageBackground source={background} style={styles.containerMain}>
          <View style={styles.BOX1}> 

          <View style={styles.kotak1}>
              <Text style={styles.textDiatas}> 
                KLIK SAJA TOMBOL DI BAWAH :
              </Text>
          </View>

          <View style={styles.buttonContainer}>

                    <TouchableOpacity  onPress={ ()=>{ Linking.openURL('https://www.facebook.com/arda.crusty')}} style={styles.buttonStyle}> 
                        <View style={styles.ButtonImageContainer}> 
                          <Image source={facebook} style={styles.iconStyle} />
                        </View>
                        <View style={styles.buttonKet}>
                            <Text style={styles.textButton}> Arda </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.instagram.com/pt_arda97/?hl=en')}} style={styles.buttonStyle}>
                        <View style={styles.ButtonImageContainer}> 
                          <Image source={instagram} style={styles.iconStyle} />
                        </View>
                        <View style={styles.buttonKet}>
                            <Text style={styles.textButton}> pt_arda97 </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.youtube.com/channel/UCD5WeUIRV4drIfmpFp9_tDA?view_as=subscriber')}} style={styles.buttonStyle}> 
                        <View style={styles.ButtonImageContainer}>
                          <Image source={Youtube_icon} style={styles.iconStyle} />
                        </View>
                        <View style={styles.buttonKet}>
                          <Text style={styles.textButton}> OI FUTURE </Text>
                        </View>
                    </TouchableOpacity>

                </View>

              <View style={styles.kotak2}/>

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
    backgroundColor:'rgba(0, 0, 0, 0.7)',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
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
    borderRadius: 25,
    shadowRadius: 20,
    borderColor: 'white',
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
  },
  buttonContainer: {
    flex: 1.4,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
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
  },
  kotak1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kotak2: {
    flex: 2.8,
  },
  textDiatas: {
    color: 'white',
    fontSize: 20,
  }
});