import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import ClubSelect from './containers/ClubSelect/ClubSelect'

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.homePage}>
        <Text style={styles.title}>habit golf</Text>
        <ClubSelect></ClubSelect>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: '#77D781',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    color: '#fff',
  }
});
