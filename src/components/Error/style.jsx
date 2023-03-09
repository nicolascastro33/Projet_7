import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/style/colors"

export const DivWrapper = styled.div`
    color: ${colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center; 
`

export const ErrorWrapper = styled.h1`
    font-size: 288px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 0px;
    @media(max-width: 700px){
        font-size: 96px;
        margin-top: 100px;
    }
`
 
export const ErrorMessageWrapper = styled.h2`
    font-size: 36px;
    margin: 0 10% 100px 10%;
    @media(max-width: 700px){
        font-size: 18px;
        margin: auto 10% 50px 10%
    }
`

export const LinkErrorWrapper = styled(Link)`
    color: ${colors.primary};
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 50px;
    text-decoration: underline ${colors.primary};
    &:hover{
        font-weight: bold;
    }
    @media(max-width: 700px){
        font-size: 14px;
        margin-bottom: 100px;
    }

`