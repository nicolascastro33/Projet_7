import { ImageDivWrapper, ImageWrapper, AboutWrapper, AllDropDown, DropDrown, ArrowDropDown } from './style'
import FirstImage from '../../assets/about-picture.jpg'
import { useEffect } from 'react'
import Arrow from '../../assets/arrow.png'

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
            <DropDrown>
              <h2>Fiabilité</h2>
              <ArrowDropDown src={Arrow} alt='flèche'/>
            </DropDrown>
            <DropDrown>
              <h2>Respect</h2>
              <ArrowDropDown src={Arrow} alt='flèche'/>
            </DropDrown>
            <DropDrown>
              <h2>Responsabilité</h2>
              <ArrowDropDown src={Arrow} alt='flèche'/>
            </DropDrown>
            <DropDrown>
              <h2>Responsabilité</h2>
              <ArrowDropDown src={Arrow} alt='flèche'/>
            </DropDrown>
          </AllDropDown>
        </AboutWrapper>
      )
    }
    

export default About