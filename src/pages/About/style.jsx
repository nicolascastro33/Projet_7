import styled from "styled-components";
import colors from "../../utils/style/colors";

export const AboutWrapper = styled.main`
    padding: 0 4% 0 4%;
    width: 92%;  
    display: flex;
    flex-direction: column;
    min-height: 90%;
    max-width: 1440px;
    margin: auto;
`

export const ImageDivWrapper = styled.div`
    position: relative;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    height: 223px;
    text-align: center; 
    display: flex;
    justify-content: center;
`

export const ImageWrapper = styled.img` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    object-fit: cover;
    width: 100%;
`

export const AllDropDown = styled.section`
    color: ${colors.secondary};
    display: flex;
    align-item: center; 
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px ;
    width: 80%;
    margin: auto;
    margin-top: 31px;`