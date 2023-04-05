import { useState } from 'react'
import { ImageSlider, AllSliderWrapper, ArrowLeft, ArrowRight, ArrowsWrapper, IndexPicture } from './style'
import DefaultPicture from '../../assets/about-picture.jpg'
import arrow from "../../assets/arrow-down-sign-to-navigate.png"

function Slideshow({ element }) {
  const pictures = element.pictures
  const numberPictures = pictures.length
  const pictureAlone = numberPictures === 0 ? {DefaultPicture} : element.pictures 

  const [currentIndex, setCurrentIndex] = useState(0)

  const picturesLength = pictures.length
  const nextPicture = () => {
    if(currentIndex === picturesLength - 1){
      setCurrentIndex(0)
    }else{
      setCurrentIndex(currentIndex + 1)
    }
  }
  const previousPicture = () => {
    if(currentIndex === 0){
      setCurrentIndex(picturesLength - 1)
    }else{
      setCurrentIndex(currentIndex - 1)
    }
  }


  return (
    <AllSliderWrapper>
      {numberPictures === 1 ? (
        <ArrowsWrapper>
           <ImageSlider
          src={pictureAlone}
          key={pictureAlone.id}
          alt="picture"
        />
        </ArrowsWrapper>
      ) : (
        <ArrowsWrapper>
          <ArrowLeft src={arrow} alt="left arrow" onClick={previousPicture} />
          <ArrowRight src={arrow} alt="right arrow" onClick={nextPicture} />
          <ImageSlider src={pictures[currentIndex]} alt={`accomodation-${currentIndex}`} />
          <IndexPicture>
            <p>{currentIndex + 1}/{picturesLength}</p>
          </IndexPicture>
        </ArrowsWrapper>
      )}
    </AllSliderWrapper>
  )
}

export default Slideshow
