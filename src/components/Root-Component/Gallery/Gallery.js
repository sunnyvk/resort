import './Gallery.css'
import React from 'react'
const imgData=[
{
    url:'iuiwrueri'
}
]

const Gallery = () => {
  return (
    <main className='gallery-main'>
        <section className='gallery'>
                <div className='gallery-image-frame'>
                     <img src="https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg" alt="" />
                </div>
                <div className='gallery-image-slider'>
                   <div className='image-slider'>
                       {imgData.map((el)=><div className='img-parent'><img src={`https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg`} alt="" /></div>)}
                   </div>
                </div>
        </section>
      
    </main>
  )
}

export default Gallery
