import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default class ClubSelect extends Component {
  constructor(props){
    super(props)
    this.state = {
      currClub: ''
    }
  }

  handlePress = (club) => {
    this.setState({ currClub: club })
    console.log(this.state.currClub)
    console.log('hi')
  }

  render() {
    
      const clubs = ['wedges', 'irons', 'woods']
      const clubBtns = clubs.map((club, i) => {
        return (
          <TouchableOpacity key={i} onPress={(club) => this.handlePress(club)}>
            <Text style={styles.clubTypes}>
              {club}
            </Text>
          </TouchableOpacity>
        )
      })
 
    return(
        <View style={styles.clubsBar}>
        {
          clubBtns
        }
        {this.state.currClub === 'wedges' && <Text>this works</Text>}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  clubsBar: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 300,
    flexDirection: 'row',
    height: 35,
    alignContent: 'center',
    justifyContent: 'space-between',
    
  },
  clubTypes: {
    color: 'black',
    flex: 1,
    paddingTop: 10,
  }
})