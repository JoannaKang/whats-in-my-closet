import React, { Component, ReactNode } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

import CityBox from './components/Hello';

interface WeatherInfo {
  city: string;
  description:string;
  main: string;
}

interface WeatherProps {}

export default class App extends React.Component<WeatherProps, WeatherInfo> {
  
  constructor(props:WeatherProps) {
    super(props);
    this.state = {
      city: '',
      description: '',
      main: ''
    };
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
          <CityBox cityProps={this.state} />
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