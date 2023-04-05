import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/style/colors"

export const DivWrapper = styled.main`
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
        margin-top: 150px;
        margin-bottom: 30px;
    }
`
 
export const ErrorMessageWrapper = styled.h2`
    font-size: 36px;
    margin: 0 10% 100px 10%;
    @media(max-width: 700px){
        font-size: 18px;
        margin-bottom: 200px;
    }
`

export const LinkErrorWrapper = styled(Link)`
    color: ${colors.primary};
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 100px;
    text-decoration: underline ${colors.primary};
    width: 50%;
    margin-right: auto;
    margin-left: auto;
    &:hover{
        font-weight: bold;
    }
    @media(max-width: 700px){
        font-size: 14px;
        margin-bottom: 100px;
    }

`