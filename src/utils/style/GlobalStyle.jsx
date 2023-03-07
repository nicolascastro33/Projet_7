import { createGlobalStyle } from "styled-components"
import colors from "./colors"

const StyledGlobalStyle = createGlobalStyle`
* {
    font-family: Montserrat, 'Trebuchet MS', Helvetica, sans-serif;
    font-size: 24px;
}

body {
    background-color: ${colors.backgroundLight};
    margin: 0;  
}
`

function GlobalStyle(){
    return <StyledGlobalStyle/>

}

export default GlobalStyle