import React, {Component} from 'react';
import Photo from './Photo'
import { withRouter } from "react-router-dom";
import PhotoList from './PhotoList';

class Container extends Component {
  
  componentDidMount() {
    this.props.getImages(this.props.match.params.id)
  } 

  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
      {
        (this.props.loading)
        ? <h1>Loading...</h1>
        : <PhotoList data={this.props.data} />
      }
      </div>
    )
  }
}

export default withRouter(Container);


{/* <div className="photo-container">
        <h2>Results</h2>
      {
        (this.props.loading)
        ? <h1>Loading...</h1>
        : <PhotoList data={this.props.data} />
      }
      </div> */}