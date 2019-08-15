import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import PhotoList from './PhotoList';

class Nav extends Component {
  render () {
    return (
      <ul>
        <li onClick={this.props.performSearch('cats')}><NavLink to ="/cats">Cats</NavLink></li>
        <li onClick={this.props.performSearch('dogs')}><NavLink to ="/dogs">Dogs</NavLink></li>
        <li onClick={this.props.performSearch('computers')}><NavLink to ="/computers">Computers</NavLink></li>
        

        <Route path='/cats' render={()=> <PhotoList data={this.props.data} />} />
        <Route path='/dogs' render={()=> <PhotoList data={this.props.data} />} />
        <Route path='/computers' render={()=> <PhotoList data={this.props.data} />} />
      </ul>

    )
  }
}

export default Nav;