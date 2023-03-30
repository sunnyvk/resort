import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './BookingPage.css'
import {IoManSharp} from 'react-icons/io5'
import {FaChild} from 'react-icons/fa'
const BookingPage = () => {

    const {id} = useParams()

    const [bookingData,setBookingData] = useState({})
    const [value1,setVal1] = useState(false)
    const [value2,setVal2] = useState(false)

    const [summaryData,setSummaryData] = useState([])


   
   console.log(id)
    const ourpropertiesData = [
        {
            imgurl:'https://d2wvwvig0d1mx7.cloudfront.net/data/org/17347/media/img/cache/290x0/1804345_290x0.jpg',
            title:'PALOLEM BEACH RESORT',
            content:`Located on the outskirts of the Palolem beach, these speciality offer a variety of accommodation options,
            suited to specific retreats. With fully air-conditioned Seafront Cottages, fully air-conditioned Garden View 
            Cottages, non a/c concrete rooms, and Family Rooms, Cuba Palolem Beach Resort upholds a mesmerizing sea view & 
            lush green gardens surrounding the property where one can completely soak in the vibe of a beach holiday! The 
            in-house Bar serves its cocktail Happy Hour and has wide selection of drinks. Other facilities at this hotel 
            include hot water, room service, 
           generator backup, laundry service, car parking, on-site Ayurvedic spa and complimentary Continental Breakfast.`,
           bookingUrl:'#',
           id:'1',
           availableRoom:
             [
               {
                imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820214944_0494131001534801784_333__DCI5568w_copy.jpg',
                title:'STANDARD A/C GARDEN VIEW ROOM ',
                roomCapacity:{max:'2',min:'1'},
                perRoom:'40000',
                adults:'4',
                children:'2',
                room:'2',
                leftRoom:'2',
                perRoomPerWithBreakFast:'4500'
               },
               {
                imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820194938_0717302001534794578_172__DCI5501W_copy.jpg',
                title:'STANDARD A/C GARDEN VIEW ROOM ',
                roomCapacity:{max:'2',min:'1'},
                perRoom:'70000',
                adults:'4',
                children:'2',
                room:'2',
                leftRoom:'2',
                perRoomPerWithBreakFast:'7500'
               }
             ]                    
        },
        {
            imgurl:'https://d2wvwvig0d1mx7.cloudfront.net/data/org/17347/media/img/cache/290x0/1804346_290x0.jpg',
            title:'CUBA PATNEM BEACH, BUNGALOWS',
            content:`A haven for peace-lovers, Cuba Patnem Beach Bungalows host colourful & 
            wooden a/c and non a/c cottages, set amongst tropical palms and lush gardens. 
            Along with opulent verandahs & hammocks, we also offer private roof deck on request for one 
            to enjoy a quaint & magical stay. Head to the shacks stretched across the beach and soak in the air, 
            bask in the sun; we ensure your yearning of staying near the beach is slaked and the memories are aeonian.
             The cottages are spacious and come with double beds, wardrobes, bedside tables and soft lighting. The bathrooms
              have a modern sink at their center, and a separate toilet and shower either side – the only 
            Western-style bathrooms of their kind in Patnem. Complimentary parking, Wi-Fi, and a Continental Breakfast are 
            on offer too!`,
           bookingUrl:'#',
           id:'2',
           availableRoom:
           [
             {
              imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820214944_0494131001534801784_333__DCI5568w_copy.jpg',
              title:'STANDARD A/C GARDEN VIEW ROOM ',
              roomCapacity:{max:'2',min:'1'},
              perRoom:'40000',
              adults:'4',
              children:'2',
              room:'2',
              leftRoom:'2',
              perRoomPerWithBreakFast:'4500'
             },
             {
              imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820194938_0717302001534794578_172__DCI5501W_copy.jpg',
              title:'STANDARD A/C GARDEN VIEW ROOM ',
              roomCapacity:{max:'2',min:'1'},
              perRoom:'70000',
              adults:'4',
              children:'2',
              room:'2',
              leftRoom:'2',
              perRoomPerWithBreakFast:'7500'
             }
           ]
        },
        {
            imgurl:'https://d2wvwvig0d1mx7.cloudfront.net/data/org/17347/media/img/cache/290x0/1804347_290x0.jpg',
            title:'CUBA AGONDA',
            content:`Located in Canacona, Cuba Agonda Beach Hotel may be the ideal place to feel South Goa and its atmosphere. 
            From here, guests can appreciate comfortable access to everything that the city gives. A well- retained atmosphere 
            and it is closeness to Palolem Seaside, Cabo da Rama castle gives this hotel a unique appeal. The amenities and 
            services offered by Cuba Agonda Beach Hotel guarantee a pleasing stay for visitors. Top benefits of the hotel include bar,
             car parking area, restaurant, room service. The hotel characteristics 14 beautifully guest rooms, each including bathe, 
             air conditioning,
             fan, daily paper in the lobby etc. The hotel provides many special leisure opportunities for example garden.`,
           bookingUrl:'#',
           id:'3',
           availableRoom:
           [
             {
              imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820214944_0494131001534801784_333__DCI5568w_copy.jpg',
              title:'STANDARD A/C GARDEN VIEW ROOM ',
              roomCapacity:{max:'2',min:'1'},
              perRoom:'40000',
              adults:'4',
              children:'2',
              room:'2',
              leftRoom:'2',
              perRoomPerWithBreakFast:'4500'
             },
             {
              imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820194938_0717302001534794578_172__DCI5501W_copy.jpg',
              title:'STANDARD A/C GARDEN VIEW ROOM ',
              roomCapacity:{max:'2',min:'1'},
              perRoom:'70000',
              adults:'4',
              children:'2',
              room:'2',
              leftRoom:'2',
              perRoomPerWithBreakFast:'7500'
             }
           ]
    
        },
    
        {
            imgurl:'https://d2wvwvig0d1mx7.cloudfront.net/data/org/17347/media/img/cache/290x0/1804348_290x0.jpg',
            title:'CUBA BEACH BUNGALOWS, PALOLEM',
            content:`A beachfront lodging of the popular Palolem Seaside, Cuba Premium Beach Huts are just 2 km away from
             Canacona Railway Station. Along with luxurious poster beds, wood fixtures, suit toilet with shower facilities 
             & private parking, these beach huts are furnished with French doors & huge windows for one to sit & savour the 
             calming view of the Arabian Sea the whole day. With a wide selection of drinks and cocktails, a shaded deck,
              hammocks and huge bean bags, Cuba Premium Beach Hut is a high-spirited haven & allows all the perks for one to not 
              only enjoy Goa’s highly reckoned nightlife but relaxed afternoon siestas too.`,
            bookingUrl:'#',
            id:'4',
            availableRoom:
            [
              {
               imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820214944_0494131001534801784_333__DCI5568w_copy.jpg',
               title:'STANDARD A/C GARDEN VIEW ROOM ',
               roomCapacity:{max:'2',min:'1'},
               perRoom:'40000',
               adults:'4',
               children:'2',
               room:'2',
               leftRoom:'2',
               perRoomPerWithBreakFast:'4500'
              },
              {
               imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820194938_0717302001534794578_172__DCI5501W_copy.jpg',
               title:'STANDARD A/C GARDEN VIEW ROOM ',
               roomCapacity:{max:'2',min:'1'},
               perRoom:'70000',
               adults:'4',
               children:'2',
               room:'2',
               leftRoom:'2',
               perRoomPerWithBreakFast:'7500'
              }
            ]
    
        },
        {
            imgurl:'https://d2wvwvig0d1mx7.cloudfront.net/data/org/17347/media/img/cache/290x0/1804349_290x0.jpg',
            title:'CUBA PREMIUM HUTS, PALOLEM',
            content:`A beachfront lodging of the popular Palolem Seaside, Cuba Premium Beach Huts are just 2
             km away from Canacona Railway Station. Along with luxurious poster beds, wood fixtures, 
             suit toilet with shower facilities & private parking, these beach huts are furnished with 
             French doors & huge windows for one to sit & savour the calming view of the Arabian Sea the whole day.
              With a wide selection of drinks and cocktails, a shaded deck, hammocks and huge bean bags, 
              Cuba Premium Beach Hut is a high-spirited haven & allows all the perks for one to not only enjoy Goa’s 
              highly reckoned nightlife but relaxed afternoon siestas too.`,
            bookingUrl:'#',
            id:'5',
            availableRoom:
            [
              {
               imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820214944_0494131001534801784_333__DCI5568w_copy.jpg',
               title:'STANDARD A/C GARDEN VIEW ROOM ',
               roomCapacity:{max:'2',min:'1'},
               perRoom:'40000',
               adults:'4',
               children:'2',
               room:'2',
               leftRoom:'2',
               perRoomPerWithBreakFast:'4500'
              },
              {
               imgurl:'https://d1vsci4s9o4dj5.cloudfront.net/thumb_173_20180820194938_0717302001534794578_172__DCI5501W_copy.jpg',
               title:'STANDARD A/C GARDEN VIEW ROOM ',
               roomCapacity:{max:'2',min:'1'},
               perRoom:'70000',
               adults:'4',
               children:'2',
               room:'2',
               leftRoom:'2',
               perRoomPerWithBreakFast:'7500'
              }
            ]
    
        }
    ]


    useEffect(()=>{
        setBookingData(ourpropertiesData.find((el)=>el.id===id))
    },[])
    

  return (
    <main className='BokingPage'>
        <div className='booking-banner'>
            <h2>Enjoy Your Dream Vacation</h2>
            
        </div> 
        <div>
         <h2 className='booking-b'>{bookingData?.title}</h2>
        </div>

        <div className='booking-card-withS'>
        <div className='booking-card'>

          {bookingData?.availableRoom?.map((el)=>
           <div className='booking-room-card'>

           <div className='img-parent'>
              <img src={el?.imgurl}>
              </img>
              <div className='type-of-room'>
                 <h6>({el.title})</h6>
              </div>
        
           </div>
           
           <div className='card-content'>
              <div>
              <h5>{el.title} </h5>
              </div>
              <div>

                <div> 
                <span><p>Room Capacity</p> </span>
                  <p className='adultp' > <span className='adult'> <IoManSharp/> </span>{el.roomCapacity.max}</p>
                  <p className='childp'><span className='child'> <FaChild/> </span>{el.roomCapacity.min}</p> 
                </div>

                <div className='perRoom-book'>
                    <div  >
                     <p>Room Rates Exclusive of Tax</p>
                     <div className='checkbox-container'>
                     <button className='add-room'>Add Room</button>             
                     </div>    
                     </div>   
                    <div className='roomonly'>
                     <h6>ROOM ONLY Rs {el.perRoomPerWithBreakFast}</h6>
                     <p>Per Room Per Night</p>
                    </div>         
                </div>
                <div className='perRoom-book'>
                    <div  >
                     <p>Room Rates Exclusive of Tax</p>
                     <div className='checkbox-container'>
                     <button className='add-room' onClick={()=>setSummaryData(val=>val)}  >Add Room</button>         
                     </div>   
                     </div>   
                    <div className='roomonly'>
                     <h6>ROOM & BREAKFAST Rs {el.perRoomPerWithBreakFast}</h6>
                     <p>Per Room Per Night</p>
                    </div>         
                </div>

              </div>
          
           </div>
           
      </div>
          
          )}

       

        </div>
        <div className='card-suummary'>
            <div className='booking'>
                Booking Summary 
            </div>

            <div className='summary'>
              <div className='date'> Dates 2023-03-30 - 2023-04-0</div>
              <div className='night'>Nights 2</div>
            </div>

        </div>
        </div>

      
    </main>
  )
}

export default BookingPage
