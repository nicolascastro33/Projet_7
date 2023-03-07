import { ImageDivWrapper, ImageWrapper, AboutWrapper } from './style'
import FirstImage from '../../assets/about-picture.jpg'
import { useEffect } from 'react'

function About(){
    useEffect(() =>{
        document.title = 'Kasa - À Propos'
    })
    
    return (
        <AboutWrapper>
          <ImageDivWrapper>
            <ImageWrapper 
                src={ FirstImage } alt="photo d'une colline"
            />
          </ImageDivWrapper>
          <h1>About</h1>
        </AboutWrapper>
      )
    }
    

export default About