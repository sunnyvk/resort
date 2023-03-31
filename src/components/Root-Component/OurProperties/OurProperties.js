import './OurProperties.css'
import React, { useEffect } from 'react'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'
import {RiHotelLine} from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {CButton,CCol,CModal,CModalHeader,CModalTitle,CModalBody,CModalFooter,CFormInput,CRow, CFormTextarea} from '@coreui/react'
import { storage } from '../../firebase'
import { getDownloadURL, ref,uploadBytesResumable } from 'firebase/storage'


//http://13.233.29.72:4000/hotelbook


const OurProperties = () => {

  const [showList,setList] =  useState(false)
  const [selectedValue,setSelectedVal] = useState(['Select Hotel to Book',0])
  const [ourPropertiesData,setOurPropertiesData] = useState([])
  const [visible, setVisible] = useState(false)
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
        perRoomPerWithBreakFast:rsbreakFast
       },
      
     ]                    
}

console.log(data)

fetch(`http://13.233.29.72:4001/hotelbook`, {
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
  
<CButton className='mx-5' onClick={()=>setVisible(true)}>ADD ON</CButton>
</CCol>

<CModal visible={visible} onClose={() => setVisible(false)} className='booking-form-p' scrollable spellCheck  size='lg'>

      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle><h4>Resort Info</h4></CModalTitle>
      </CModalHeader>
      <CModalBody>
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


      </CModalBody>



      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary" onClick={saveResortInfo}>Save Resort</CButton>
      </CModalFooter>
</CModal>
         
    <div className='about-hotel'>
        {ourPropertiesData.filter((el)=>el.title===selectedValue[0]).map((el)=>
        <div className='goa-properties'>
            <div className='img-container'>
               <img src={el.imgurl} alt="" />
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
