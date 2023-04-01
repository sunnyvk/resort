import './Gallery.css'
import React from 'react'
import { useEffect,useState } from 'react'
import { CImage } from '@coreui/react'
import { CCard,CCarousel,CCarouselItem,CCarouselCaption } from '@coreui/react'





const Gallery = () => {

  const [galleryData,setgalleryData] = useState([])

  const getHotelData  = async  ()=>{
    const response = await  fetch(`https://allapiresort-w3ql.vercel.app/hotelbook`)

    const data  =  await response.json() 

   const allImgUrl = []


    // const allimage =    data?.flatMap((el)=>{    
    //   return  el?.availableroom.reduce((crr,el2)=>{
    //     console.log(crr)
    //       if(!crr[0]){
    //         crr?.push(el?.imgurl)
    //       }
    //        if(el2.imgurl){
    //           crr?.push(el2?.imgurl)
    //        } 
    //        return crr
    //     },[])
    
    //    })


    data.forEach(element => {
      allImgUrl.push(element?.imgurl)
      element.availableroom.forEach(element2 => {
        if(element2.imgurl){
          allImgUrl?.push(element2.imgurl)
          }
      });

    });
  
       setgalleryData(allImgUrl)
   }

 
console.log(galleryData)
   
   useEffect(()=>{
   getHotelData()
   },[])
  


  return (
    <main className='gallery-main'>
        <section className='gallery'>
                <div className='gallery-image-frame'>                  
                     <img src="https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg" alt="" />
                </div>
                
        <CCarousel controls indicators dark>
          <CCarouselItem>
            <CImage className="d-block w-100" src='https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg' alt="slide 1" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            {/* <CImage className="d-block w-100" src={VueImg} alt="slide 2" /> */}
            <CCarouselCaption className="d-none d-md-block" >
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            {/* <CImage className="d-block w-100" src={AngularImg} alt="slide 3" /> */}
            <CCarouselCaption className="d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>

                
                <div className='gallery-image-slider'>
                   <CCard className='d-flex'>
                       {galleryData.map((el)=><CImage src={el} width={100}/>)}
                   </CCard>
                </div>
        </section>
      
    </main>
  )
}

export default Gallery
