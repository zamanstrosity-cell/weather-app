import React, { Component } from 'react'
import { BsCompass, BsDroplet } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { 
    FiWind, 
    FiCloudDrizzle, 
    FiCloudLightning, 
    FiCloud,
    FiCloudRain } from 'react-icons/fi';
import { weatherRequest, WEATHER_API } from '../requests';
import './component-styles/card.css';
import { kelvinConversion, celsiusConversion, fehrenheitConversion } from '../calculations';
import axios from 'axios';


export class Card extends Component {
    state = {
        city: '',
        temp: '',
        pressure: '',
        wind: '',
        humidity: '',
        celsius: true,
        bgColor : ''
    }

    componentDidMount() {
    const city = this.props.city;
    (async function requestCity() {
         const res = await axios.get(`${weatherRequest}?q=${city}&appid=${WEATHER_API}`)
         return res;
    })().then(res => {
        this.setState({
            city: city,
            temp: kelvinConversion(res.data.main.temp).kelvinToCelsius,
            pressure: res.data.main.pressure,
            humidity: res.data.main.humidity,
            wind: res.data.wind.speed,
            celsius: true
        })
    });

}
    changeUnit = () => {
        if(this.state.celsius){
            this.setState({
                ...this.state,
                temp: celsiusConversion(this.state.temp),
                celsius: !this.state.celsius
            })
        }else {
            this.setState({
                ...this.state,
                temp: fehrenheitConversion(this.state.temp),
                celsius: !this.state.celsius
            })
        }
    }


    render() {
        const myStyle = {
            boxShadow: "1px 1px 10px",
            maxWidth: "350px",
            height: "90vh",
            margin: "auto",
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            backgroundImage : this.props.bgColor
        
        }
        return (
            <div className="container" style={myStyle}>
                <div className="card-header">
                    <div id="search"><GiHamburgerMenu /></div>
                    <div id="degrees">
                        <label className="switch">
                            <input type="checkbox" onChange={this.changeUnit}/>
                            <span className="slider square" title="Change Measurement"></span>
                        </label>
                    </div>
                </div>
                <h1 className="city">{this.props.city}</h1>
                <div className="weather-info">
                    <div className="weather-icon" style={{ fontSize: '120px' }}><FiCloud /></div>
                    <div className="temperature" style={{ fontSize: '30px' }}>{this.state.temp}&#176;{this.state.celsius ? "C" : "F"}</div>
                </div>
                <div className="extra-info">
                    <div className="pressure">
                    <BsCompass className="icon"/> PRESSURE<div className="info">{this.state.pressure} hPa</div>
                    </div>
                    <div className="wind"><FiWind className="icon"/>WIND<div className="info">{this.state.wind} m/s</div>
                    </div>
                    <div className="humidity"><BsDroplet className="icon"/>HUMIDITY<div className="info">{this.state.humidity} %</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
