import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>copyright@ArdaDevelop</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#800080',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 7,
      paddingBottom: 10,
      position: 'relative',
    },
    textStyle: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
    }
}
export default Footer;