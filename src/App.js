import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';
import axios from 'axios';

import { weatherRequest, WEATHER_API } from './requests';
import { kelvinConversion, celsiusConversion, fehrenheitConversion } from './calculations';

class App extends React.Component {
  state = {
    city: 'Cairo',
    temp: '',
    pressure: '',
    wind: '',
    humidity: '',
    celsius: true,
    bgColor : '',
    headerStyle : false
}
requestCity = async (city) => { 
  try
    {
      const res = await axios.get(`${weatherRequest}?q=${city}&appid=${WEATHER_API}`)
      this.setState({
        city: city,
        temp: this.state.celsius ? kelvinConversion(res.data.main.temp).kelvinToCelsius: kelvinConversion(res.data.main.temp).kelvinToFehrenheit,
        pressure: res.data.main.pressure,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
        celsius: this.state.celsius ? true : false
    })
  }catch(err){
    alert("City not found!")
  }
}
componentWillMount() {
  this.requestCity(this.state.city)
} 
searchCity = city => {
    setTimeout(this.requestCity(city), 1000)
  }
  changeUnit = () => {
    this.setState({
      ...this.state,
      celsius : !this.state.celsius,
      temp : this.state.celsius ? celsiusConversion(this.state.temp) : fehrenheitConversion(this.state.temp)
    })
  }
  handleClose = () => {
      this.setState({
        ...this.state,
        headerStyle: !this.state.headerStyle
      })
  }
  render() {
    return (
      <div className="App">
        <Header searchCity={this.searchCity} headerStyle={this.state.headerStyle} handleClose={this.handleClose}/>
        <Card city={this.state.city} temp={this.state.temp} pressure={this.state.pressure} 
        wind={this.state.wind} humidity={this.state.humidity} celsius={this.state.celsius} handleClose={this.handleClose} changeUnit={this.changeUnit}/>
      </div>
    );
}
}


export default App;
