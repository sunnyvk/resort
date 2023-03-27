import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';


const Header = React.lazy(()=>import('./components/Header/Header'))
const Home = React.lazy(()=>import('./components/Root-Component/Home'))
const About=React.lazy(()=>import('./components/Root-Component/About'))
const Footer=React.lazy(()=>import('./components/Root-Component/Footer'))
const Spa=React.lazy(()=>import('./components/Root-Component/Spa'))

function App() {
  return (
    <div style={{position:'relative'}}>
    <BrowserRouter>
      <Routes>
           
     <Route path="/" element={<Header/>}>
     <Route path='' element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/spa" element={<Spa />} />
    </Route>

        {/* <Route path="/" element={<Layout />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}

      </Routes>
    </BrowserRouter>  
    <Footer />
  </div> 
  );
}

export default App;
