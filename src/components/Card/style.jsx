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
    position: relative;
    :hover{
        transform: scale(1.1);
        transition: transform 1000ms; 
    }
`

export const TextCardWrapper = styled.h2`
    color: ${colors.secondary};
    font-size: 18px;
    text-decoration: none; 
    position: absolute;
    bottom: 0;
   
`