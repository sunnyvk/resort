import './OurProperties.css'
import React, { useEffect } from 'react'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'
import {RiHotelLine} from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {CButton,CCol,CModal,CModalHeader,
  CModalTitle,CModalBody,CModalFooter,CFormInput,CRow,
   CFormTextarea,CFormCheck,CCard,CCardHeader, CCardBody,
   CImage
  } from '@coreui/react'
import { storage } from '../../firebase'
import { getDownloadURL, ref,uploadBytesResumable } from 'firebase/storage'


//http://13.233.29.72:4000/hotelbook


const OurProperties = () => {

  const [showList,setList] =  useState(false)
  const [selectedValue,setSelectedVal] = useState(['Select Hotel to Book',0])
  const [ourPropertiesData,setOurPropertiesData] = useState([])
  const [visibleForm, setVisibleForm] = useState(false)
  const [resrtImgPrograss,setImgPrograss] = useState(0)
  const [roomImgProgress,setRoomProgress] = useState(0)

  const [roomImgUrl,setRoomImgUrl] = useState('')
  const [resortImgUrl,setResortImgUrl] = useState('')

  const [resortName,setResortName] = useState('')
  const [roomName,setRoomName] = useState('')
  const [max,setMax] = useState(0)
  const [min,setMin] = useState(0)
  const [content,setContent] = useState('')
  const [children,setChildren] = useState('')
  const [adults,setAdults] = useState('')
  const [room,setRoom] = useState(0)
  const [leftRoom,setLeftRoom] = useState(0)
  const [rsRoomOnly,setRoomOnly] = useState(0)
  const [rsbreakFast,setBreakFast] = useState(0)
  const [roomPerNight,setRomPerNight] = useState(0)
  const [roomAminities,setRoomAminities] = useState('')
  const [notCancable,setNotCacable] = useState(false)
  const [wardrobe,seWardRobe] = useState(false)
  const [besideTable,setBesideTable] = useState(false)
  const [fan,setFan] = useState(false)
  const [balcony,setBalcony] = useState(false)
  const [houseKeping,setHouseKeping] = useState(false)
  const [mosquito,setMosquito] = useState(false)
  const [hour24ColdShower,set24HourColdShower] = useState(false)
  const [wifi,setWifi] = useState(false)
  const [airCodition,setAirCondition] = useState(false)





 const getOprPropertiesData = async  ()=>{
const response = await fetch(`http://13.233.29.72:4001/hotelbook`,{headers:{
  method:'GET'
}})
const data = await response.json()
setOurPropertiesData(data)
}

 useEffect(()=>{
    getOprPropertiesData()
 },[])



 const handleChange = event => {
  const fileUploaded = event.target.files[0];
  const file = event.target.files[0]
   
      const uploadImage = (file)=>{
        if(!fileUploaded)return
       const storageRef =   ref(storage,`photos/${fileUploaded.name}`)
       const uploadTask = uploadBytesResumable(storageRef,fileUploaded)

       uploadTask.on("state_changed",(snapshot)=>{
        const prog = Math.round((snapshot.bytesTransferred/snapshot.totalBytes) *100)
        setImgPrograss(prog)

       },(error)=>{
        console.log(error)
       },
       ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
          setResortImgUrl(url)
        })
       }
       )
      }
      uploadImage(file)
};



const handleChange2 = event => {
  const fileUploaded = event.target.files[0];
  const file = event.target.files[0]
   
      const uploadImage = (file)=>{
        if(!fileUploaded)return
       const storageRef =   ref(storage,`photos/${fileUploaded.name}`)
       const uploadTask = uploadBytesResumable(storageRef,fileUploaded)

       uploadTask.on("state_changed",(snapshot)=>{
        const prog = Math.round((snapshot.bytesTransferred/snapshot.totalBytes) *100)
         setRoomProgress(prog)
       },(error)=>{
        console.log(error)
       },
       ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
          setRoomImgUrl(url)
        })
       }
       )
      }
      uploadImage(file)
};



console.log(resortImgUrl,roomImgUrl)

console.log(ourPropertiesData)


 const saveResortInfo =()=>{
  const data = {
    imgurl:resortImgUrl,
    title:resortName,
    content:content,
   bookingUrl:'#',
   availableroom:
     [
       {
        imgurl:roomImgUrl,
        title2:roomName,
        roomcapacity:{max:max,min:min},
        perRoom:rsRoomOnly,
        adults:adults,
        children:children,
        room:room,
        leftroom:leftRoom,
        perRoomPerWithBreakFast:rsbreakFast,
        Guest_Reviews:'No Reviews',
        Room_Amenities:'',
        nonCancel:notCancable,
        Wardrobe: wardrobe,
        Bedside_Table:besideTable,
        Fan:fan,
        Balcony:balcony,
        House_Keeping:houseKeping,
        pernightroom:roomPerNight,
        mosquitonet:mosquito,
        Wifi:wifi,
        coldshower_24hrs:hour24ColdShower,
        airconditioned:airCodition,
       },      
     ]                    
}

console.log(data)

fetch(`https://allapiresort-w3ql.vercel.app/hotelbook`, {
  method: "POST",
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
}).then((resp) => {
  resp.json().then(() => {
      alert("successfully submitted")
      getOprPropertiesData()
  }).catch((error)=>{
    console.log(error)
  })
})
 }




console.log(visibleForm)



  return (
    <main className='our-properties-main'>



       <div className='quba-goa-search'>
        <div className='banner'>
            <h2>The Cuba Goa Properties</h2>
        <h6 style={{margin:'20px 0'}}>BEACH HUTS, BUNGALOWS & RESORTS</h6>

        {/* <div className='card-dinner'>
          <h2>Palolem Beach Resort</h2>
          <h2>Gala Dinner (Buffet, Drinks and DJ)</h2>
          <p>Christmas (25th Dec) - INR 3000/person</p>
          <p>New Year (31st Dec) - INR 4000/person</p>
          
          </div>  */}
        </div>

      <div className='properties-to-book'>

        <div className='select-menu'>

           <div className='select-btn' onClick={()=>setList((val)=>!val)}>
                 <span>{selectedValue[0]}</span>
                {showList?<AiOutlineDown/>:<AiOutlineUp/>}
           </div>

          {showList&& <ul className='options'>
             {ourPropertiesData.map((el)=>
               <li className='option' onClick={()=>setSelectedVal(()=>{
                setList((val)=>!val)
                return [el.title,el._id]
               })}>
               <li><RiHotelLine/></li>
               <span className='option-text'>{el.title}</span>
              </li>
             )}
           </ul>}
        </div>

        {selectedValue[0]!=='Select Hotel to Book'&&<Link className='book-button' to={
          selectedValue[0].toLocaleLowerCase().split(' ').join('-')+"/"+selectedValue[1]} >
          Book Now</Link>}


      </div>
         
<CCol className='text-end px-4 py-3'>
<CButton className='mx-5' onClick={() => setVisibleForm(true)}>ADD ON</CButton>
</CCol>

<CModal
  keyboard={false}
  portal={false}
  visible={visibleForm} 
className='booking-form-p ' scrollable size='lg'>

      <CModalHeader  onClick={() => {setVisibleForm(false)}}>
        <CModalTitle><h4>Resort Info</h4></CModalTitle>
      </CModalHeader>
      <CModalBody >
        <CRow>
         <CCol lg={6}>
         <CFormInput  type='file' label={`Upload Resort Image ${resrtImgPrograss}%`} onChange={handleChange} /> 
         </CCol>
         <CCol lg={6}>
         <CFormInput label='Resort Name' value={resortName} onChange={(e)=>setResortName(e.target.value)} type='text'/>
         </CCol>
        </CRow>
        <CRow>
          <CCol className='mt-2'>
          <CFormTextarea label='About Resort' value={content} onChange={(e)=>setContent(e.target.value)} ></CFormTextarea>
          </CCol>
        </CRow>

        <CRow>
         <CCol>
             <h4>Room info</h4>
         </CCol>
        </CRow>         

        <CRow>
         <CCol lg={6}>
         <CFormInput  type='file' label={`Upload Room Image ${roomImgProgress}%`} onChange={handleChange2} /> 
         </CCol>
         <CCol lg={6}>
         <CFormInput label='Room Name' value={roomName} onChange={(e)=>setRoomName(e.target.value)} type='text'/>
         </CCol>
        </CRow>
        <CRow>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Max Room Capacity ' type='number' value={max} onChange={(e)=>setMax(e.target.value)} />
          </CCol>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Min Room Capacity ' type='number' value={min} onChange={(e)=>setMin(e.target.value)}  />
          </CCol>
        </CRow>
        <CRow>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Adult Capacity ' value={adults} type='number'  onChange={(e)=>setAdults(e.target.value)} />
          </CCol>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Children Capacity ' value={children} type='number' onChange={(e)=>setChildren(e.target.value)}  />
          </CCol>
        </CRow>
        <CRow>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Room' type='number' value={room} onChange={(e)=>setRoom(e.target.value)}  />
          </CCol>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Left Room' type='number'  value={leftRoom} onChange={(e)=>setLeftRoom(e.target.value)} />
          </CCol>
        </CRow>
        
        <CRow>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Rs Room only' type='number' value={rsRoomOnly} onChange={(e)=>setRoomOnly(e.target.value)} />
          </CCol>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Rs Room with Breakfast' type='number' value={rsbreakFast} onChange={(e)=>setBreakFast(e.target.value)}  />
          </CCol>
        </CRow>
        <CRow>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Room No Of Per night' type='number' value={roomPerNight} onChange={(e)=>setRomPerNight(e.target.value)} />
          </CCol>
          <CCol className='mt-2' lg={6}>
           <CFormInput label='Room Amenities' type='text' value={roomAminities} onChange={(e)=>setRoomAminities(e.target.value)} />
          </CCol>
        
        </CRow>
 

        <CCard className='mx-2 mt-4'>
           <CCardHeader className='text-center'>
            <h4>Room Facility</h4>
           </CCardHeader>
           <CCardBody className='p-4 ' >
            
        <CRow className='text-start'>
        <CCol className='mt-2' >
           <CFormCheck type='checkbox' label='Non Cancel / Non Refundable' 
           checked={notCancable} onChange={()=>setNotCacable(val=>!val)} />
          </CCol>     
          <CCol className='mt-2' >
           <CFormCheck type='checkbox' label='Wardrobe' 
             checked={wardrobe} onChange={()=>seWardRobe(val=>!val)}
            />
          </CCol>                
        </CRow>

        <CRow className='text-start'>
        <CCol className='mt-2' >
           <CFormCheck type='checkbox' label='Bedside Table' 
           checked={besideTable} onChange={()=>setBesideTable(val=>!val)}  />
          </CCol>  
          <CCol className='mt-2' >
           <CFormCheck type='checkbox' label='Fan'
           checked={fan} onChange={()=>setFan(val=>!val)}/>
          </CCol>                 
        </CRow >

        <CRow className='text-start'>
        <CCol className='mt-2' >
           <CFormCheck type='checkbox' label='Balcony'
           checked={balcony} onChange={()=>setBalcony(val=>!val)}/>
          </CCol> 
          <CCol className='mt-2' >
           <CFormCheck type='checkbox' label='House Keeping' 
           checked={houseKeping} onChange={()=>setHouseKeping(val=>!val)}/>
          </CCol>                
        </CRow>

        <CRow className='text-start'>
        <CCol className='mt-2' >
           <CFormCheck type='checkbox' label='Mosquito Net'
           checked={mosquito} onChange={()=>setMosquito(val=>!val)}/>
          </CCol>  
          <CCol className='mt-2' >
           <CFormCheck type='checkbox' label='24hr hot & cold shower'
           checked={hour24ColdShower} onChange={()=>set24HourColdShower(val=>!val)}
           />
          </CCol>                
        </CRow>
        <CRow className='text-start' >
        <CCol className='mt-2' >
           <CFormCheck type='checkbox' label='WiFi' 
           checked={wifi}  onChange={()=>setWifi(val=>!val)} />
          </CCol>  
          <CCol className='mt-2' >
           <CFormCheck type='checkbox'  label='AIR-CONDITIONED' 
           checked={airCodition} onChange={()=>setAirCondition(val=>!val)}
            />
          </CCol>    
               
        </CRow>

           </CCardBody>


        </CCard>


      </CModalBody>



      <CModalFooter>
        {/* <CButton color="secondary" onClick={() => setVisibleForm(false)}>
          Close
        </CButton> */}
        <CButton color="primary" onClick={saveResortInfo}>Save Resort</CButton>
      </CModalFooter>
</CModal>
         
    <div className='about-hotel'>
        {ourPropertiesData.filter((el)=>el.title===selectedValue[0]).map((el)=>
        <div className='goa-properties'>
            <div className='img-container'>
               <CImage rounded thumbnail  width={2000} height={2000} src={el.imgurl} alt="" />
            </div>
            <div className='our-properties-content'>
                <h2>{el.title}</h2>
                 <p>{el.content}</p>                              
            </div>

        </div>
        )}

   </div>

  </div>

  
  

        
    </main>
  )
}

export default OurProperties
