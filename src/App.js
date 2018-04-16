import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize'
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css';

//Api Key
const apiKey = "99dfe35fcb7de1ee"
const crossOrigin = "https://cors-anywhere.herokuapp.com/"

class App extends Component {

  state = {
    temperature: undefined,
    weather: undefined,
    time: undefined,
    city: undefined,
    stateName: undefined,
    humidity: undefined,
    icon: undefined,
    error: undefined,
    loading:true,
  }


  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    if( city && state){
    const response = await fetch(`${crossOrgin}https://api.wunderground.com/api/${apiKey}/conditions/q/${state}/${city}.json`)
    const responseData = await response.json()
    console.log(responseData);
    this.setState({
      temperature: responseData.current_observation.temperature_string,
      weather: responseData.current_observation.weather,
      time: responseData.current_observation.local_time_rfc822,
      city: responseData.current_observation.display_location.city,
      stateName:responseData.current_observation.display_location.state,
      humidity:responseData.current_observation.relative_humidity,
      icon: responseData.current_observation.icon_url,
      loading: false,
      error: ''
    })
  } else {
    this.setState({
      temperature: undefined,
      weather: undefined,
      time: undefined,
      city: undefined,
      stateName: undefined,
      humidity: undefined,
      icon:undefined,
      error: 'Please insert valid Info'
  })
  }
}

  render() {
    return (
      <Container>
        <Row className="main z-depth-5" >
        <Col l={6} s={12}  className="image">
        <Header temperature={this.state.temperature}
                icon={this.state.icon}/>
        </Col>
        <Col l={6} s={12} className="weather">
        <Form getWeather={this.getWeather}/>
        <Weather temperature={this.state.temperature}
                 weather={this.state.weather}
                 time={this.state.time}
                 city={this.state.city}
                 state={this.state.stateName}
                 humidity={this.state.humidity}
                 loading={this.state.loading}
                 error={this.state.error}
                 />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
