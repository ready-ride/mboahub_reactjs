import React from 'react';
import './ImageGallery.css';

function ImageGallery({images}) {
  return (
    <div className='image-gallery'>
       {
         images ?
         images.map((image, i) =>
         <img key={i} className='shadow' src={image} width="250px" alt="room-deatil" />
         )
         :
         <h5>loading ...</h5>
       }
    </div>
  )
}

export default ImageGallery;
