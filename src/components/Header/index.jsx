import { Link } from 'react-router-dom'
import { HeaderWrapper, LogoWrapper, NavWrapper, StyleLink } from './style'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoWrapper src={Logo} alt="logo" />
      </Link>
      <NavWrapper>
        <StyleLink to="/">Accueil</StyleLink>
        <StyleLink to="/about">À propos</StyleLink>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
