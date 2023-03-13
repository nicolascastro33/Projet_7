import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ImageSlider, AllSliderWrapper } from './style'
import { Carousel } from 'react-responsive-carousel'
import DefaultPicture from '../../assets/about-picture.jpg'

function Slideshow({ element }) {
  const pictures = element.pictures
  const numberPictures = pictures.length
  const pictureAlone = numberPictures === 0 ? {DefaultPicture} : element.pictures 
  return (
    <AllSliderWrapper>
      {numberPictures === 1 ? (
        <ImageSlider
          src={pictureAlone}
          key={pictureAlone.id}
          alt="picture"
        />
      ) : (
        <Carousel 
            className='slide-container'
            autoPlay 
            interval={6000} 
            infiniteLoop
            showStatus={false}
            stopOnHover={true}
            centerMode={true}
            centerSlidePercentage={100}
            dynamicHeight={true}
            >
        {pictures?.map((picture, index) => (
            <ImageSlider
                src={picture}
                key={`${picture.id}-${index}`}
                alt="picture"
            />
        ))}
        </Carousel>
      )}
    </AllSliderWrapper>
  )
}

export default Slideshow
