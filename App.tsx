import React, { Component, ReactNode } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

export default class App extends React.Component {
  
  state = {
    city: '',
    description: '',
    main: ''
  }

  componentDidMount () {
    fetchApi()
    .then(res => {
      this.setState({
        city: res.name,
        description: res.weather[0].description,
        main: res.weather[0].main
      })
    })
  }

  public render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>{this.state.city}</Text>
          <Text>{this.state.description}</Text>
          <Text>{this.state.main}</Text>
        </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'yellow',
    color: 'black'
  }
})

const fetchApi = async () => {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=8eeb256097b74905d07244c6e174b458`)
  return res.json();
}