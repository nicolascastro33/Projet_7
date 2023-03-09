import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2% 4% 0 4%;
`

export const LogoWrapper = styled.img`
    width: 210px;
    height: 68px;
    @media (max-width: 800px) {
        width: 100px;
    }
`

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 30%;
    @media (max-width: 800px) {
        width: 40%;
    }

`
export const StyleLink = styled(Link)`
    text-decoration: none;
    margin: auto;
    color: ${colors.primary};
    &:hover {
        text-decoration: underline ${colors.primary}
    }
    @media (max-width: 800px) {
        font-size: 14px;
    }
`