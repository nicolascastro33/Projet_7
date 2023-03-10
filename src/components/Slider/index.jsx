import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ImageSlider, AllSliderWrapper } from './style'
import { Carousel } from 'react-responsive-carousel'

function Slider({ element }) {
  const pictures = element.pictures
  return (
    <AllSliderWrapper>
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
    </AllSliderWrapper>
  )
}

export default Slider
