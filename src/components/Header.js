import React, { Component } from 'react'
import './component-styles/header.css';
import { FiSearch } from 'react-icons/fi';
import { AiFillCloseSquare } from 'react-icons/ai';


export class Header extends Component {
    state = {
        city: '',
        headerStyle: 'visible'
    }
    handleChange = e => {
        const value = e.target.value
        this.setState({
            city: value
        })
    }
    handleSubmit = e => {
        this.props.searchCity(this.state.city);
    }

    render() {
        return (
            <div className="header-container" style={{ visibility : this.props.headerStyle ? "visible" : "hidden"}}>
                <div className="header">
                    <input type="text" placeholder="Search for City" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit} ><FiSearch /></button>
                    <AiFillCloseSquare id="close-button" onClick={this.props.handleClose}/>
                </div>
            </div>
        )
    }
}


export default Header
