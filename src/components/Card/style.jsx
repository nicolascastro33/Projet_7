import colors from "../../utils/style/colors";
import styled from "styled-components";
import { Link } from 'react-router-dom'


export const CardWrapperLink = styled(Link)`
    background: ${colors.primary};
    width: 25%;
    height: 240px;    
    max-width: 340px;
    margin: 15px;    
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    padding: 5px;
    transform: scale(1);
    transition: transform 1000ms; 
    :hover{
        transform: scale(1.1);
        transition: transform 1000ms; 
    }
    @media(max-width: 1000px){
        width: 40%;
    }
    @media(max-width: 750px){
        width: 100%;
        min-width: none;
    }

`

export const TextCardWrapper = styled.h2`
color:  ${({theme}) => (theme === 'dark' ? colors.darkMode : colors.secondary)};
    font-size: 16px;
`

export const ImageWrapper = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 10px;
`