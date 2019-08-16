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
import apiKey from './Config';
import Error from './Error';
import PhotoList from './PhotoList';


class App extends Component {

  state= {
    pictures: []
  }

  componentDidMount() {
    this.performSearch();
  }


  performSearch=(query='cats')=> {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(res=> {
        const pictures=res.data.photos.photo
        this.setState({pictures});
      }).catch((error)=> {
        console.log("There was an error parsing your data", error);
      })
  }
  
  render() {
    console.log(this.state.pictures);
    return (
      <div className="container">
        <Search />
        <Nav performSearch={this.performSearch}  />
        <Route path='/cats' render={()=> <PhotoList data={()=> (this.state.data)}/>} />
        <Route path='/dogs' render={()=> <PhotoList data={()=>this.state.data} />} />
        <Route path='/computers' render={()=> <PhotoList data={()=> this.state.data} />} />
      </div>
    )
  }
}

export default App;
