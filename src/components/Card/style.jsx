import colors from "../../utils/style/colors";
import styled from "styled-components";
import { Link } from 'react-router-dom'


export const CardWrapperLink = styled(Link)`
    background: ${colors.primary};
    width: 25%;
    height: 340px;    
    max-width: 340px;
    margin: 15px;    
    border-radius: 10px;
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
export const CardWrapper = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
`

export const TextCardWrapper = styled.h2`
    color:  ${({theme}) => (theme === 'dark' ? colors.darkMode : colors.secondary)};
    font-size: 16px;
    margin-top: auto;
    margin-left: 10px;
    width: 50%;

`