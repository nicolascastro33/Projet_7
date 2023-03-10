import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { ImageSlider, ImageContainer } from './style'

function Slider({ element }) {
  const pictures = element.pictures
  return (
    <Carousel>
      {pictures?.map((picture, index) => (
        <ImageContainer>
          <ImageSlider
            src={picture}
            key={`${picture.id}-${index}`}
            alt="picture"
          />
        </ImageContainer>
      ))}
    </Carousel>
  )
}

export default Slider
