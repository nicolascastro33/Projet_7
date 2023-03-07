import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/logements/:id"
          element={<Accomodation />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
