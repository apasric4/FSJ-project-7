import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import '../index.css';
import axios from 'axios';
import apiKey from './Config';
import NotFound from './NotFound';
import PhotoList from './PhotoList';


class App extends Component {

  state= {
    pictures: []
  }

  componentDidMount() {
    this.getImages()
  }


  getImages=(query='cats')=> {
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
        <Nav getImages={this.getImages}  />
        <Switch>
          <Route exact path="/" render={()=> <Redirect to={'/cats'} />} />
          <Route path='/cats' render={()=> <PhotoList getImages={()=>this.getImages} query='cats' data={this.state.pictures}/>} />
          <Route path='/dogs' render={()=> <PhotoList getImages={()=>this.getImages} query='dogs' data={this.state.pictures} />} />
          <Route path='/computers' render={()=> <PhotoList getImages={()=>this.getImages} query='computers' data={this.state.pictures} />} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App;
