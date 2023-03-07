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
    margin: 0;
`
export const FooterImg = styled.img`
    width: 122px;
    height: 39px;
    display: block;
    margin: 50px auto;
`

export const FooterText = styled.h2`

`