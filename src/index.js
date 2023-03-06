import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import { Router, Route, Routes,  } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
