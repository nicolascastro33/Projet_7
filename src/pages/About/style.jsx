import styled from "styled-components";
import colors from "../../utils/style/colors";

export const AboutWrapper = styled.main`
    padding: 0 4% 0 4%;
    margin: 40px 0 20px 0;
    width: 92%;  
    display: flex;
    flex-direction: column;
    min-height: 90%;
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
    width: 100%;
    height: 200%;
    position: relative;
    bottom: 100px;
`

export const AllDropDown = styled.div`
    color: ${colors.secondary};
    display: flex;
    align-item: center; 
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px ;
    width: 80%;
    margin: auto;
    margin-top: 31px;`