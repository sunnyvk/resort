import './Resorts.css'
import { useState } from 'react'
import beachResort2 from '../../../assets/resort.mp4'

import cubapatnam from '../../../assets/CUBA_PATNEM_BEACH_BUNGALOWS.jpg'
import cubpatnam from '../../../assets/PALOLEM_BEACH_RESORT.jpg'




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
 <div  style={{height:'100vh'}}>
        < video style={{width:'100%',height:'100%' ,objectFit:'cover'}} src={beachResort2} autoPlay loop muted />
   </div>


<div className='resorts'>
<h2 className='resort-title'>LEARN MORE ABOUT OUR RESORTS</h2>
<div className='resorts-container'>
  
<div className='resort-card'>
<div className='img-parent' >
    <img src={cubapatnam} alt=""
     onMouseOver={hoverOverImg} 
     onMouseLeave={hoverOverNotImg} />
</div>
<div className={hover?'text-of-resort-hover text-of-resort':'text-of-resort'}  >
<p>LEARN MORE ABOUT OUR RESORTS</p>
</div>
</div>
<div className='resort-card'>
<div className='img-parent' >
    <img src={ cubpatnam} alt=""
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
