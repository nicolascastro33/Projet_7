import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import DarkMode from './components/DarkMode'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>    
        <GlobalStyle />
        <Header />
        <DarkMode />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logements/:id" element={<Accomodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)
