import React, {Component} from 'react';
import Photo from './Photo';

class PhotoList extends Component {

  handleImages=()=> {
    this.props.getImages(this.props.query);
  }

  componentDidMount() {
    this.handleImages();
  }

  
  render() {
    const data=this.props.data 
    console.log(this.props.query)
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {data.map((photo,index)=> 
            <Photo 
              farm={photo.farm}
              server={photo.server} 
              id={photo.id}
              secret={photo.secret}
              key={index}
            />
          )}
        </ul>
      </div>
    );
  }
}


export default PhotoList;
