import './ForSale.css'
import { useState,useEffect } from 'react'
import {MdOutlineCancel} from 'react-icons/md'

const ForSale = () => {

  const [imagesData,setImagesData] = useState([])
  const [showForm,setForm] = useState(false)

   const getDataFetch = async ()=>{
   const response =  await  fetch(`https://resort-api.vercel.app/upload`)
   response.json().then((data)=>{
    setImagesData(data)
   })
   }

   useEffect(()=>{
    getDataFetch()
   },[])

console.log(imagesData)

  return (
    
    <section>
    <div className='forSale'>
      <h2 className='sale-Title'>Owning a Resort Cottage has never <br/> been so easy!</h2>
               <button>Ownership FAQSs</button>

           <p>
           * Pricing & interest rate subject to change without notice.
            Open finance rate from 7.99% OAC over 180 months, with no penalties or hidden fees,
             if you choose to pay down loan early. 20% down-payment required on new cottage purchases.
              Maximum to finance $200,000. **Financing subject to deposit criteria, 
           interest rates and previous bankruptcy. Renderings are artist concept only and not to scale. E & O.E.</p>  

    </div>
  <div className='newPlot-forSale'>
    <h2 className='new-sale-title'> NEW & PRE-OWNED COTTAGES, AND AVAILABLE LOTS</h2>  
  <div className='button-parent'>
    <button className='sales-new-button' onClick={()=>setForm(true)}>ADD NEW CART</button>
  </div>  


    <div className='sale-card'>
      <div className='img-container'>
        <img src='https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbiUyMGhlYWR8ZW58MHx8MHx8&w=1000&q=80'></img>
      </div>
      <h2 className='sale-card-title' >Tittle Of Mony</h2>
      <h3 className='sale-card-title-about'>Season</h3>
          <h4 className='card-info-1'> <span>1,207/mo</span> <span> 417/wk </span> <span> 47,437 down</span> 
          
           </h4>

          <h6><spna>baddroom</spna> <span>bathroom</span></h6>
          <h6>available at</h6>
    </div>
  </div>

  {showForm&& <div className='form-modal'  onClick={(e)=>{if(e.target.className ==='form-modal'){setForm(false)}}}>

  <div className='cart-modal'  >
       <button className='sale-cart-cancel' onClick={()=>setForm(false)}><MdOutlineCancel/></button>
  <form onClick={(e)=>e.preventDefault()} className='sale-cart-form'>
   
    <div className='inputbox-sales-img'>
       <div className='img-parnet-sales'>
         <img ></img>
       </div>
       <button>Upload image</button>
    </div>
    <div className='inputbox-sales'>
    <label for='Name'> Name</label>
    <input id='Name' placeholder='Enter name' type='text' />
    </div>
    <div className='inputbox-sales'>
    <label for='Location'>Location</label>
    <input id='Location' type='text' placeholder='Enter Location' />
    </div>
    <div className='inputbox-sales'>
    <label for='Bathroom'>No Of Bathroom</label>
    <input id='Bathroom ' type='number' placeholder='Enter No Of Bathroom' />
    </div>
    <div className='inputbox-sales'>
    <label for='Bedroom '>No  Of Bedroom</label>
    <input id='Bedroom ' type='number' placeholder='Enter No  Of Bedroom'/>
    </div>
    <div className='inputbox-sales'>
    <label for='price'>Price</label>
    <input id='price ' type='number'placeholder='Enter your  price' />
    </div>
    <div className='inputbox-sales'>
    <label for='Price per month'>Price per month</label>
    <input id='Price per month' placeholder='Enter your Price per month'  />
    </div>
    <div className='inputbox-sales'>
    <label for='Price per month'>Price per week</label>
    <input id='Price per month'  placeholder='Price per week'  />
    </div>
    <div>
    </div>
    <div className='inputbox-sales2'>
    <button type='submit' className='sumbit'>Submit</button>
    </div>
</form>
</div>
</div>}
</section>



  )
}

export default ForSale
