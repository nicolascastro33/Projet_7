import colors from "../../utils/style/colors";
import styled from "styled-components";


export const NightModeButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: fixed;
    z-index: 3;
    bottom: 50px;
    right: 20px;
    opacity: 0.8;
    cursor: pointer;
    background-color: ${({isDarkMode}) => (isDarkMode ?  colors.backgroundLight : colors.darkMode)};

`