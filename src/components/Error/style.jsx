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
    margin: 0;
    margin-top: 50px;
`
 
export const ErrorMessageWrapper = styled.h2`
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 100px;
`

export const LinkErrorWrapper = styled(Link)`
    color: ${colors.primary};
    font-size: 18px;
    margin-bottom: 50px;

`