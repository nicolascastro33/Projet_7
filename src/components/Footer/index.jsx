import { FooterWrapper, FooterImg, FooterText } from "./style"
import logoFooter from '../../assets/logoFooter.png'

function Footer(){
    return(
        <FooterWrapper>
            <FooterImg src={logoFooter} alt='logo site' />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterWrapper>
    )
}

export default Footer