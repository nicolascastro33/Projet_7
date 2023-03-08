import colors from "../../utils/style/colors";
import styled from "styled-components";


export const NightModeButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 20px;
    position: sticky;
    top: 20px;
    opacity: 0.6;
    cursor: pointer;
    background-color: ${({isDarkMode}) => (isDarkMode ?  colors.backgroundLight : colors.darkMode)};

`