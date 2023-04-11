import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const AccueilWrapper = styled.main`
  padding: 0 4% 0 4%;
  margin-bottom: 20px;
  width: 92%;
  display: flex;
  flex-direction: column;
  min-height: 90%;
  max-width: 1440px;
  margin: auto;
`

export const ImageDivWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  height: 223px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`
export const TextInImageWrapper = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.secondary};
  margin: auto;
  font-size: 48px;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

export const ImageWrapper = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: grayscale(60%);
  object-fit: cover;
`

export const AllCardsWrapper = styled.section`
  margin: auto;
  background: ${colors.backgroundLightGrey};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 56px 50px 56px 50px;
  margin-bottom: 50px;
  border-radius: 20px;
  min-width: 80%; 
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: 20px;
    background: none;
    padding: 0;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 30px;
  }
  ${({ theme }) =>
    theme === 'dark' &&
    `
      background: ${colors.darkMode};
    `}
`
