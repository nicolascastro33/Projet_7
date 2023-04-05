import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const AccueilWrapper = styled.div`
  padding: 0 4% 0 4%;
  margin: 40px 0 20px 0;
  width: 92%;
  display: flex;
  flex-direction: column;
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
`
export const TextInImageWrapper = styled.h1`
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  color: ${colors.secondary};
  margin: auto;
  font-size: 48px;
  @media(max-width: 750px){
       font-size: 24px;
  }

`

export const ImageWrapper = styled.img`
  width: 100%;
  filter: grayscale(60%);
  object-fit: cover;
`

export const AllCardsWrapper = styled.div`
    margin-top: 30px;
    background: ${colors.backgroundLightGrey}; 
    // padding: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 20px;
    ${({theme}) => (theme === 'dark' &&`
      background: ${colors.darkMode};
    `)}

`

