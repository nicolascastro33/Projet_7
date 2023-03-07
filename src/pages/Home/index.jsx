import {
  ImageDivWrapper,
  ImageWrapper,
  AccueilWrapper,
  TextInImageWrapper,
  AllCardsWrapper
} from './style'
import { Logement } from '../../logement'
import FirstImage from '../../assets/accueil-picture.jpg'
import { useEffect } from 'react'
import Card from '../../components/Card'

function Home() {
  useEffect(() => {
    document.title = 'Kasa - Bienvenue'
  })

  return (
    <AccueilWrapper>
      <ImageDivWrapper>
        <ImageWrapper src={FirstImage} alt="photo d'une colline" />
        <TextInImageWrapper>Chez vous, partout et ailleurs</TextInImageWrapper>
      </ImageDivWrapper>
      <AllCardsWrapper>
        {Logement?.map((logement, index) =>(
                  <Card 
                      key={`${logement.title}-${index}`}
                      title={logement.title}
                      picture={logement.pictures}
                      id={logement.id}
                  />
        ))}
      </AllCardsWrapper>
    </AccueilWrapper>
  )
}

export default Home
