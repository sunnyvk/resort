import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

const Header = React.lazy(()=>import('./components/Header/Header'))
const Home = React.lazy(()=>import('./components/Root-Component/Home'))

function App() {
  return (
    <div style={{position:'relative'}}>
    <BrowserRouter>
      <Routes>
           
     <Route path="/" element={<Header/>}>
     <Route path='' element={<Home />} />
    </Route>

        {/* <Route path="/" element={<Layout />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}

      </Routes>
    </BrowserRouter>  
  </div> 
  );
}

export default App;
