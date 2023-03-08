import colors from "../../utils/style/colors";
import styled from "styled-components";


export const CardWrapper = styled.div`
    background: ${colors.primary};
    width: 280px;
    height: 240px;    
    max-height: 340px;
    max-width: 340px;
    margin: 15px;    
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    padding: 5px;
    :hover{
        transform: scale(1.1);
        transition: transform 1000ms; 
    }
`

export const TextCardWrapper = styled.h2`
    color: ${colors.secondary};
    font-size: 16px;
    text-decoration: none;
`

export const ImageWrapper = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 10px;
`