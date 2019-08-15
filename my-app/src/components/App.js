import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import '../index.css';
import axios from 'axios';


class App extends Component {

  state= {
    pictures: []
  }

  componentDidMount() {
    axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7d5896e0121a13e3da606ba731afc6f1&tags=cats&format=json&nojsoncallback=1&api_sig=ee7d8fd3b9e4c557b07c755967afacd8')
      .then(res=> {
        const pictures=res.data
        this.setState({pictures});
      })
  }
  
  render() {
    console.log(this.state.pictures);
    return (
      <div className="container">
        <Search />
        <Nav />
      </div>
    )
  }
}

export default App;
