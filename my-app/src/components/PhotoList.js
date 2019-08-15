import React from 'react';
import Photo from './Photo';

const PhotoList=(props)=> {

  return (
    <ul className="photo-container">
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
  );
}


export default PhotoList;
