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
  bottom: 100px;
  color: ${colors.secondary};
  margin: auto;
`

export const ImageWrapper = styled.img`
  width: 100%;
  height: 200%;
  position: relative;
  bottom: 100px;
  filter: grayscale(60%);
`

export const AllCardsWrapper = styled.div`
    margin-top: 30px;
    background: ${colors.backgroundLightGrey}; 
    // padding: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 20px;
    @media(max-width: 750px){
       
    }
    ${({theme}) => (theme === 'dark' &&`
      background: ${colors.darkMode};
    `)}

`

