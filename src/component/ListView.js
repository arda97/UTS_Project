import React from 'react';
import { FlatList, StyleSheet, View, Text, Alert, ScrollView } from 'react-native';

type Props = {};
export default class ListView extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      refreshing: false
    };
  }


    componentDidMount() {
      this.makeRemote();
    }

    makeRemote = () => {
      fetch('http:http://api.ifreethink.net/z1515051025/getapi.php')
      .then((result) => result.json())
      .then((res) => {
        this.setState({
          data: res,
          logo: 'a',
          loading: false,
          refreshing: false
        });
      });
    }

    handleRefresh = () => {
      this.setState({
        page: 1,
        refreshing: true,
        seed: this.state.seed + 1,
      }, () => {
        this.makeRemote();
      });
    }

  render() {
    return (
      <View style={styles.containerMain}>
          <ScrollView>
            <FlatList
               data={this.state.data}
            />
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  scene: {
        flex: 1,
        paddingTop: 5,
    },
});