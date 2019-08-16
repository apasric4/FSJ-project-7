import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import PhotoList from './PhotoList';

class Nav extends Component {
  render () {
    return (
      <nav className="main-nav">
        <ul>
          <li onClick={()=> this.props.getImages('cats')}><NavLink to ="/cats">Cats</NavLink></li>
          <li onClick={()=> this.props.getImages('dogs')}><NavLink to ="/dogs">Dogs</NavLink></li>
          <li onClick={()=> this.props.getImages('computers')}><NavLink to ="/computers">Computers</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;