import styled from "styled-components";
import colors from "../../utils/style/colors";


export const OneDropDrown = styled.div`
`
export const ArrowDropDown = styled.img`
    width: 30px;
    height: 30px;
    margin: auto;
    margin-right: 10px;
`
export const HeaderDropDown = styled.div`
background: ${colors.primary};
// height: 38px;
color: ${colors.secondary};
border-radius: 10px;
display: flex; 
justify-content: space-between;
margin-bottom: 20px;
& h2{
    font-size: 18px;
    margin-left: 10px;
}
`

export const TextDropDown = styled.div`
    background: ${colors.backgroundLightGrey};
    margin: 0;
    & p{    
        color: black;
        // visibility: hidden
    }
    ${(props) =>
    props.$isOpen &&`
 
    `}
`