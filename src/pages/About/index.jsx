import { ImageDivWrapper, ImageWrapper, AboutWrapper, AllDropDown } from './style'
import FirstImage from '../../assets/about-picture.jpg'
import { useEffect } from 'react'
import DropDrown from '../../components/Dropdown'
import { InfoAbout } from '../../data/InfoAbout'

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
          <AllDropDown>
            {InfoAbout?.map((element, index) => (
              <DropDrown 
                key={`${element.name}-${index}`}
                name={element.name}
                description={element.description}
              />
            ))}          
          </AllDropDown>
        </AboutWrapper>
      )
    }
    

export default About