import React from 'react'
import './Home.css'
import Video from '../Video'
import { useState } from 'react'
import { AiOutlineRight,AiOutlineLeft} from 'react-icons/ai';



import { Image } from 'react-bootstrap'

const Home = () => {

  const [activeDot,setActiveDot] = useState(0)
  const [move,setMove] = useState(0)
 
 const cottages = [
  {
    title:'The king fisher Deluxe',
    price:'7466666',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Kingfisher_FINAL-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'6365',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2019/02/Superior-e1571765780262-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'4965',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  }
   
  ,
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  },
  {
    title:'The king fisher Deluxe',
    price:'7865',
    mo:'896375/mo',
    wk:'957/wk',
    down:'975,4849 down',
    bedroom:'3',
    bathroom:'3',
    available:'indore',
    imgUrl:'https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg'
  }
   
   
   
 ]


 const comments = [
  {
    username:'tony',
    comments:`NextPrevious
    Dylan was exceptional! He was friendly, 
    enthusiastic and presented all info in an interesting manner also.
     He was more than willing to answer all questions NextPrevious
     Dylan was exceptional! He was friendly, enthusiastic and presented 
     all info in an interesting manner also. He was more than willing to answer all questions`
  }
 ]



  return (
    <main className='Home'>
      <Video />
      <div className='entry-content'>
        <div className='mid'>
          <h2 className='entry-title'>Own your own piece of Ontario’s Cottage Country at Cuba gua.</h2>
        </div>
        <div className='large-columns'>
          <p>Welcome to Cuba gua where you will find the perfect city escape that includes all the amenities your family comes to expect from a resort – heated pools, multi-sports courts and playgrounds, and best of all, sandy combed beaches. Think stunning views, beautiful surroundings and endless options for outdoor adventure, for sale or rent.</p>
          <p>
            When you step inside your new home-away-from-home you’ll find the start of many family memories. Professionally designed, fully furnished and includes all your appliances so you have all the comforts of home. Enjoy stress-free and virtually maintenance-free cottage ownership along with all-inclusive amenities, full family entertainment and more!  Choose from nine great Ontario locations in highly sought after Muskoka, Prince Edward County, The Kawarthas, Perth and Saugeen Shores.
          </p>
          <p>So what are you waiting for? View available
            <a href="/own">cottage models for sale</a>
            , or
            <a href="/rent">start planning your family vacation today.</a>
          </p>
        </div>
      </div>


      <div className='npCallout'>
    
        <div className='img-slider'></div>
        <div className='img-slider-content' >
          <div >
            <h2>New Phases of <br/> Development for 2023</h2>
            <p >This exciting opportunity allows owners to select their preferred lot and new <br/>cottage model within the phase.</p>
            <p>&nbsp;</p>
            <p>
              <a class="learn-more" href="https://www.greatblueresorts.com/new-phases/">Learn More</a>
            </p>
          </div>
        </div>
      </div>

<section className='cottages-slide'>
   <h2 className='title-card-cottages'>NEW COTTAGES FOR SALES</h2>
      <div className='card-cottages-slider-parent'>
      <div className='cottages-slider' style={{left:`-${move}%`}}>
        {cottages.map((el)=>
           <div className='cottages-card'>
           <div className='cottages-img-parent'>
             <img src={el.imgUrl}></img>
           </div>
            <div className="info">
              <h2 className="priceBox">Rs {el.price} </h2>
              <h3>The Kingfisher Deluxe</h3>
              <div className="summaryPrices">
                Rs {el.mo} &nbsp;
                Rs {el.wk} &nbsp;
                Rs {el.down} &nbsp;
              </div>
              <p>bedrooms <strong>{el.bedroom}</strong> bathrooms <strong> {el.bathroom}</strong> </p>

              <button className='cottages-button'>learn more</button>

            </div>
          </div>
        )}

      </div>
     </div>
     <div className='dot-parnet' >
      {cottages.map((el,i,arr)=> {
        if((i+1)%3===0 ){
        console.log(i+1)
      return <div className={move===((i+1)/3*100-100)?'dot active-dot':'dot '} onClick={(e)=>{
        setActiveDot(i)
        setMove((val)=>((i+1)/3*100-100))
        
      }}></div>
      }})}
     </div>
</section>

  <section className='comments'>
    <div className='comment-container'>
      <div className='comment-image'>
        <img src="" alt="" />
      </div>
      <div className='comment-box'>
     <button className='comments-button'><AiOutlineLeft/></button> 
      <p className='comment-message'>{comments[0].comments}</p>
      <button className='comments-button'><AiOutlineRight/></button>
      </div>
    </div>
  </section>   
  
 <section className='greatbluesort'>
   <h2 className='greatbluesort-title'>WHAT'S HAPPENING @GREATBLUERESORTS</h2>
   <div className='greatbluesort-section'>
    {cottages.map((el)=><div style={{background:`url(${el.imgUrl})`,boxShadow:' 1px 1px 5px 4px rgba(51, 51, 90, 0.076)'}}></div>)}
   </div>
 </section>

    </main >

  )
}

export default Home
