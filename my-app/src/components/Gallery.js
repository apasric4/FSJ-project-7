import React from 'react'
import Photo from './Photo'


const Gallery=(props)=> {
  return (
    <div className="photo-container">
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
  )
}

export default Gallery