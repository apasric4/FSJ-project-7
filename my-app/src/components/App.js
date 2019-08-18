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
import NoResults from './NoResults';
import Container from './Container';
import Gallery from './Gallery';


class App extends Component {

  state= {
    cats: [],
    dogs: [],
    computers: [],
    searchResult: [],
    loading: true
  }

  componentDidMount() {
    this.getCats()
    this.getDogs()
    this.getComputers()
  }


  getCats=(query='cats')=> {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(res=> {
        const cats=res.data.photos.photo
        this.setState({cats})
      }).catch((error)=> {
        console.log("There was an error parsing your data", error);
      })
  }

  getDogs=(query='dogs')=> {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(res=> {
        const dogs=res.data.photos.photo
        this.setState({dogs})
      }).catch((error)=> {
        console.log("There was an error parsing your data", error);
      })
  }

  getComputers=(query='computers')=> {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(res=> {
        const computers=res.data.photos.photo
        this.setState({computers});
      }).catch((error)=> {
        console.log("There was an error parsing your data", error);
      })
  }

  getImages=(query)=> {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then (res=> {
        const searchResult=res.data.photos.photo
        this.setState({
          searchResult,
          loading: false
        });
      }).catch((error)=> {
        console.log("There was an error parsing your data", error);
      })
  }

  
  render() {
    return (
      <div className="container">
        <Search getImages={this.getImages}/>
        <Nav />
        <Switch>
          <Route exact path="/" render={()=> <Redirect to={'/cats'} />} />
          <Route path='/cats' render={()=> <Gallery data={this.state.cats}/>} />
          <Route path='/dogs' render={()=> <Gallery data={this.state.dogs} />} />
          <Route exact path='/computers' render={()=> <Gallery data={this.state.computers} />} />
          <Route path='/search/:id' render={()=> <Container getImages={this.getImages} loading={this.state.loading} data={this.state.searchResult} />} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App;

