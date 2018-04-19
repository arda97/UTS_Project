
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const tulisan = (props) => {
  return(
    <View>
    <Text style={styles.textStyle}> ini tulisan </Text>
    </View>
  );
}

const styles = {
  textStyle: {
    color: 'rgb(0, 238, 103)',
    justifyContent: 'center'
  }
}
export default tulian;
/*export default class tulisan extends Component {
  render() {
    return (
      <Text> coba 1 </Text>
    );
  }
} */
