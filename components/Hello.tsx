import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native'

interface WeatherInfo {
    city : string;
    description: string;
    main: string;
}

interface WeatherProp {
    cityProps: WeatherInfo;
}

export default class CityBox extends React.Component <WeatherProp> {
    
    render () {
        if(this.props) {
            return (
            <Wrapper>
                <Text>
                    {this.props.cityProps.city}                
                </Text>
                <Text>
                    {this.props.cityProps.description}
                </Text>
                <Text>   
                    {this.props.cityProps.main}
                </Text>
            </Wrapper>
            )
        }
    }
}

const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
`