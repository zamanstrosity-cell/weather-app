import React, { Component } from 'react'
import './component-styles/header.css';
import { FiSearch } from 'react-icons/fi';


export class Header extends Component {
    state = {
        city: ''
    }
    handleChange = e => {
        const value = e.target.value
        this.setState({
            city: value
        })
    }
    render() {
        return (
            <div className="header">
                <input type="text" placeholder="Search for City" onChange={this.handleChange} />
                <button id="submit" onClick={this.props.searchCity.bind(this.state.city)} ><FiSearch /></button>
            </div>
        )
    }
}


export default Header
