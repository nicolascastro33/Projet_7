import styled from 'styled-components'

export const AllSliderWrapper = styled.section`
    overflow: hidden;
    border-radius: 20px;
    margin-top: 40px;
    height: 400px;
    @media(max-width: 1000px){
        height: 350px;
    }
`

export const ImageSlider = styled.img`
    border-radius: 20px;
    min-width: 100%;
    object-fit: cover;
    min-height: 100%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

export const ArrowRight = styled.img`
    position: absolute;
    right: 0px;
    top: 40%;
    width: 80px;
    transform: rotate(-90deg);
    z-index: 2;
    filter: invert(100%);
    -webkit-filter: invert(100%);
`

export const ArrowLeft = styled.img`
    position: absolute;
    left: 0px;
    top: 40%;    
    width: 80px;
    transform: rotate(90deg);
    z-index: 2;
    filter: invert(100%);
    -webkit-filter: invert(100%);
`

export const ArrowsWrapper = styled.div`
    position: relative;
    background-color: black; 
    height: 100%;
    overflow: hidden;
`

export const IndexPicture = styled.div`
    position: absolute;
    left: 48%;
    bottom: 5px;
    color: white;
`