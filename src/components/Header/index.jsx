import { HeaderWrapper, LogoWrapper, NavWrapper, StyleLink } from './style'
import Logo from '../../assets/logo.svg'

function Header() {
  const url = window.location.pathname
  const underlineHome = url === "/" ? true : false
  const underlineAbout = url === "/about" ? true : false

  return (
    <HeaderWrapper>
      <a href='/'>
        <LogoWrapper src={Logo} alt="logo" />
      </a>
      <NavWrapper> 
        <a href="/">
          {underlineHome ? (
            <StyleLink $underline>
              Accueil
            </StyleLink>
          ) : (
            <StyleLink to="/">
              Accueil            
            </StyleLink>
          )}
        </a>
        <a href="/about">
          {underlineAbout ? (
            <StyleLink $underline>
            À propos
          </StyleLink>
          ) : (
            <StyleLink>
            À propos
          </StyleLink>
          )}
      </a>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
