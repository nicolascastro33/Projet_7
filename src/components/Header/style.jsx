import styled from "styled-components";
import colors from "../../utils/style/colors";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2% 4% 0 4%;
`

export const LogoWrapper = styled.img`
    width: 210px;
    height: 68px;
    @media (max-width: 600px) {
        width: 100px;
    }
`

export const NavWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 30%;
    list-style-type: none;
    @media (max-width: 1000px){
        width: 40%;
        flex-wrap: wrap;
    }
`
export const StyleLink = styled.li`
    text-decoration: none;
    margin: auto;
    color: ${colors.primary};
    &:hover {
        font-weight: bold;
    }
    @media (max-width: 600px) {
        font-size: 14px;
        text-transform: uppercase;

    }
    ${(props) => 
        props.$underline && `
            text-decoration: underline ${colors.primary};
        `
    }
`