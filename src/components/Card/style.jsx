import colors from "../../utils/style/colors";
import styled from "styled-components";
import { Link } from 'react-router-dom'


export const CardWrapperLink = styled(Link)`
    background: ${colors.primary};
    height: 340px;  
    border-radius: 10px;
    padding: 5px;
    transition: transform 1000ms; 
    :hover{
        transform: scale(1.04);
        transition: transform 1000ms; 
    }
    @media(max-width: 1200px){
        height: 225px;
        min-width: initial;
    }
`
export const CardWrapper = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
`

export const TextCardWrapper = styled.h2`
    font-size: 16px;
    margin-top: auto;
    margin-left: 10px;
    color: ${colors.secondary};
    width: 50%;
    z-index: 1;
`

export const ImageCardWrapper = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    object-fit: cover;
    min-width: 100%;
`