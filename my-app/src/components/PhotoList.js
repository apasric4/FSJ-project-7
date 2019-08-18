import React, {Component} from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

class PhotoList extends Component {

  photoArray=()=> {
    if (this.props.data.length>0) {
      return this.props.data.map((photo,index)=> <Photo farm={photo.farm} server={photo.server} id={photo.id} secret={photo.secret} key={index}  />)
    } else {
      return <NoResults />
    }
  }

  render() {
    return (
      <ul>
        {this.photoArray()}
      </ul>
    );
  }
}   


export default PhotoList;

