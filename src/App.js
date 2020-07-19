import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';


class App extends React.Component {
  state = {
    city: 'London',
    bgColor: `linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)`
  }
  
  searchCity = city => {
    this.setState({
      ...this.state,
        city: city
    })
  }

  render() {
    return (
      <div className="App">
        <Header searchCity={this.searchCity} />
        <Card city={this.state.city} bgColor={this.state.bgColor}/>
      </div>
    );
}
}

export default App;
