import styled from "styled-components"
import colors from "../../utils/style/colors"

export const FooterWrapper = styled.footer`
    background : ${colors.backgroundFooter};
    color: ${colors.secondary};
    height: 209px;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    text-align: center;
`
export const FooterImg = styled.img`
    width: 122px;
    height: 39px;
    display: block;
    margin: 50px auto;
    @media(max-width: 600px){
        width:100px;
        height: 30px;
    }
`

export const FooterText = styled.h2`
    margin-bottom: 0;
    @media(max-width: 700px){
        font-size: 14px;
    }
`