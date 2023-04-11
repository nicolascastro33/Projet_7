import styled from "styled-components";
import colors from "../../utils/style/colors";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2% 4% 0 4%;
    max-width: 1440px;
    margin: auto;
    margin-bottom: 40px;
    margin-top: 20px;
    @media (max-width: 600px){
        margin-bottom: 16px;
        margin-top: 0px;
    }
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
    gap: 30px;
    list-style-type: none;
    @media (max-width: 1000px){
        gap: 20px;
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