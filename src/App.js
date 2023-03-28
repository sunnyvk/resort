import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { Suspense } from 'react';
import Footer from './components/Root-Component/Footer';


const Header = React.lazy(()=>import('./components/Header/Header'))
const Home = React.lazy(()=>import('./components/Root-Component/Home'))
const About=React.lazy(()=>import('./components/Root-Component/About'))
const Spa=React.lazy(()=>import('./components/Root-Component/Spa'))
const ForSale = React.lazy(()=>import('./components/Root-Component/ForSale'))
const Resorts = React.lazy(()=>import('./components/Root-Component/Resorts'))
const OurProperties = React.lazy(()=>import('./components/Root-Component/OurProperties'))
const ContactUs = React.lazy(()=>import('./components/Root-Component/ContactUs'))
const Gallery = React.lazy(()=>import('./components/Root-Component/Gallery'))





function App() {
  return (
    <div style={{position:'relative'}}>
    <BrowserRouter>
      <Routes>
           
     <Route path="/" element={<Header/>}>

     <Route path='' element={
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


     <Route path='/forSale' element={
    <Suspense fallback={<p>Loading....</p>}> 
     <ForSale/>
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
