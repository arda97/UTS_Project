import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>  GO-Adventure </Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#800080',
      alignItems: 'center',
      padding: 8,
      paddingTop: 8,
      position: 'relative',
      justifyContent: 'center'
      
    },
    textStyle: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },

}

export default Header;
