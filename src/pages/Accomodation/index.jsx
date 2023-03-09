import { useParams } from 'react-router-dom'
import { Logement } from '../../logement'
import  DropDrown  from '../../components/Dropdown'
import { useEffect } from 'react'
import Stars from '../../components/Stars'
import { useTheme } from '../../utils/hooks'
import {
  AccomodationWrapper,
  InformationLogementWrapper,
  FirstPartInformation,
  RatingWrapper,
  ImageDebutWrapper,
  TitleWrapper,
  MapsLogement,
  AllTagsWrapper,
  TagsWrapper,
  NameOwnerWrapper,
  OwnerPicture, 
  StarsWrapper,
  AllDropDown,
} from './style'

function Accomodation() {
  const { id } = useParams()
  const {theme} = useTheme()
  const element = Logement.find((element) => element.id === id)
  const NumberStarsRating = Number(element.rating)
  const RatingStars = []
  for(let stars = 0; stars < 5; stars++){
    if(NumberStarsRating > stars){
        RatingStars.push(true)
    }else{
        RatingStars.push(false)
    }
  }  

  useEffect(() => {
    document.title = `Kasa - Logement de ${element.host.name}`
  })
  return (
    <AccomodationWrapper>
        <ImageDebutWrapper src={element.cover} alt={element.title} /> 
        <InformationLogementWrapper>           
            <FirstPartInformation>
                <TitleWrapper>{element.title}</TitleWrapper>
                <MapsLogement>{element.location}</MapsLogement>
                <AllTagsWrapper>
                    {element.tags?.map((tag, index) => (
                        <TagsWrapper 
                            theme={theme} 
                            key={`${tag}-${index}`}
                        >
                            {tag}
                        </TagsWrapper>
                    ))}
                </AllTagsWrapper>
            </FirstPartInformation>
            <RatingWrapper>
                <NameOwnerWrapper>
                    <h3>{element.host.name}</h3>
                    <OwnerPicture src={element.host.picture} alt={element.host.name} />
                </NameOwnerWrapper>
                <StarsWrapper>
                    {RatingStars?.map((rating, index) => (
                        <Stars
                            key={`stars-${index}`}
                            rating={rating}   
                        />
                    ))}
                </StarsWrapper>
            </RatingWrapper>
        </InformationLogementWrapper>
        <AllDropDown>
            <DropDrown
                description={element.description}
                name='Description'
            />  
            <DropDrown
                description={element.equipments}
                name='Équipements'
            /> 
        </AllDropDown> 
    </AccomodationWrapper>
  )
}

export default Accomodation
