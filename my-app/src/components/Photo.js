import React from 'react';

const Photo=(props)=> {
  return (
    <li>
      <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="photo" />
    </li>
  )
}

export default Photo;