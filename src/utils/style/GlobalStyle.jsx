import { createGlobalStyle } from "styled-components"
import colors from "./colors"
import { ThemeContext } from "../context/"
import { useContext } from "react"

const StyledGlobalStyle = createGlobalStyle`
* {
    font-family: Montserrat, 'Trebuchet MS', Helvetica, sans-serif;
    font-size: 24px;
}

a{
    text-decoration: none;
}

body {
    background-color: ${({isDarkMode}) => (isDarkMode ?  colors.darkMode : colors.backgroundLight)};
    margin: 0;  
}
`

function GlobalStyle() {
    const  {theme}  = useContext(ThemeContext)
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
  }
  
  export default GlobalStyle