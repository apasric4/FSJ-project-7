import React from 'react';
import Photo from './Photo';

const PhotoList=(props)=> {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {props.data.map((photo,index)=> 
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


export default PhotoList;
