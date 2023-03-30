import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import { Suspense } from 'react';
import Footer from './components/Root-Component/Footer/Footer';


const Header = React.lazy(()=>import('./components/Header/Header'))
const Home = React.lazy(()=>import('./components/Root-Component/Home/Home'))
const About=React.lazy(()=>import('./components/Root-Component/About/About'))
const Spa=React.lazy(()=>import('./components/Root-Component/spa/Spa'))
const ForSale = React.lazy(()=>import('./components/Root-Component/ForSale/ForSale'))
const Resorts = React.lazy(()=>import('./components/Root-Component/Resorts/Resorts'))
const OurProperties = React.lazy(()=>import('./components/Root-Component/OurProperties/OurProperties'))
const ContactUs = React.lazy(()=>import('./components/Root-Component/Contact/ContactUs'))
const Gallery = React.lazy(()=>import('./components/Root-Component/Gallery/Gallery'))
const Login = React.lazy(()=>import('./components/Root-Component/Login/Login'))
const  BookingPage = React.lazy(()=>import('./components/Root-Component/BookingPage/BookingPage'))

function App() {

  return (
    <div style={{position:'relative'}}>
    <BrowserRouter>
      <Routes>
           
     <Route path="" element={<Header/>}>


     <Route path='' element={
      <Suspense fallback={<p>Loading....</p>}>
         <Login/>
     </Suspense>
     } />

     <Route path='/home' element={
      <Suspense fallback={<p>Loading....</p>}>
     <Home />
     </Suspense>
     } />

     <Route path="/about" element={
    <Suspense fallback={<p>Loading....</p>}>
     <About />
     </Suspense>
     }/>

     <Route path="/spa" element={
    <Suspense fallback={<p>Loading....</p>}> 
     <Spa />    
    </Suspense> 
     } />


     <Route path='/our-properties/:name/:id' element={
    <Suspense fallback={<p>Loading....</p>}> 
     < BookingPage/>
     </Suspense>      
     }/>

    <Route path='/resorts' element={
    <Suspense fallback={<p>Loading....</p>}> 
     <Resorts/>
     </Suspense>      

     }/>

    <Route path='/our-properties' element={
    <Suspense fallback={<p>Loading....</p>}> 
     <OurProperties/>
     </Suspense>      

     }/>

   <Route path='/contact-us' element={
    <Suspense fallback={<p>Loading....</p>}> 
     <ContactUs/>
     </Suspense>      

     }/>

  <Route path='/gallery' element={
    <Suspense fallback={<p>Loading....</p>}> 
     <Gallery/>
     </Suspense>      

     }/>

    </Route>

   

      </Routes>
    </BrowserRouter>  
    <Footer />
  </div> 
  );
}

export default App;
