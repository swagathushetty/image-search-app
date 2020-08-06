import React from 'react'
import './ImageList.css'

import ImageCard from './imageCard'

const imageList=(props)=>{
    const images=props.images.map((image)=>{
        return <ImageCard image={image} key={image.id}/>
    })
    return (
          <div className="image-list">
             {images}
          </div>
          )
}



export default imageList