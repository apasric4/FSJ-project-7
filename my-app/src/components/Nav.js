import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom'

class Nav extends Component {
  render () {
    return (
      <ul>
        <li>Cats</li>
        <li>Dogs</li>
        <li>Computers</li>
      </ul>

    )
  }
}

export default Nav;