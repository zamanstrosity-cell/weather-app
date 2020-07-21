import React, { Component } from 'react'
import { BsCompass, BsDroplet } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiWind, FiCloud } from 'react-icons/fi';
import './component-styles/card.css';

export class Card extends Component {
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
                    <div id="search"><GiHamburgerMenu onClick={this.props.handleClose}/></div>
                    <div id="degrees">
                        <label className="switch">
                            <input type="checkbox" onChange={this.props.changeUnit}/>
                            <span className="slider square" title="Change Measurement"></span>
                        </label>
                    </div>
                </div>
                <h1 className="city">{this.props.city}</h1>
                <div className="weather-info">
                    <div className="weather-icon" style={{ fontSize: '120px' }}><FiCloud /></div>
                    <div className="temperature" style={{ fontSize: '30px' }}>{this.props.temp}&#176;{this.props.celsius ? "C" : "F"}</div>
                </div>
                <div className="extra-info">
                    <div className="pressure">
                    <BsCompass className="icon"/> PRESSURE<div className="info">{this.props.pressure} hPa</div>
                    </div>
                    <div className="wind"><FiWind className="icon"/>WIND<div className="info">{this.props.wind} m/s</div>
                    </div>
                    <div className="humidity"><BsDroplet className="icon"/>HUMIDITY<div className="info">{this.props.humidity} %</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Card
