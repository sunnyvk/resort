import './Resorts.css'
import Video from '../Video'
import { useState } from 'react'

const Resorts = () => {

    const [hover,setHover] = useState(false)

 function hoverOverImg (){
    setHover(true)
 }
 function hoverOverNotImg (){
    setHover(false)
 }


  return (
    <section>
       <Video/>

<div className='resorts'>
<h2 className='resort-title'>LEARN MORE ABOUT OUR RESORTS</h2>
<div className='resorts-container'>
  
<div className='resort-card'>
<div className='img-parent' >
    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt=""

     onMouseOver={hoverOverImg} 
     onMouseLeave={hoverOverNotImg} />
</div>
<div className={hover?'text-of-resort-hover text-of-resort':'text-of-resort'}  >
<p>LEARN MORE ABOUT OUR RESORTS</p>
</div>
</div>
</div>
</div>

    </section>
  )
}

export default Resorts
