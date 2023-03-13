import {
  ImageDivWrapper,
  ImageWrapper,
  AccueilWrapper,
  TextInImageWrapper,
  AllCardsWrapper
} from './style'
import { Logement } from '../../data/logement'
import FirstImage from '../../assets/accueil-picture.jpg'
import { useEffect } from 'react'
import Card from '../../components/Card'
import { useTheme } from '../../utils/hooks'

function Home() {
  const {theme} = useTheme()
  useEffect(() => {
    document.title = 'Kasa - Bienvenue'
  })

  return (
    <AccueilWrapper>
      <ImageDivWrapper theme={theme}>
        <ImageWrapper src={FirstImage} alt="photo d'une colline" />
        <TextInImageWrapper >Chez vous, partout et ailleurs</TextInImageWrapper>
      </ImageDivWrapper>
      <AllCardsWrapper theme={theme}>
        {Logement?.map((logement, index) =>(
                  <Card 
                      key={`${logement.title}-${index}`}
                      title={logement.title}
                      cover={logement.cover}
                      id={logement.id}
                  />
        ))}
      </AllCardsWrapper>
    </AccueilWrapper>
  )
}

export default Home
