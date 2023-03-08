import styled from "styled-components";
import colors from "../../utils/style/colors";


export const OneDropDrown = styled.div`
    display: flex; 
    flex-direction: column;
    overflow: hidden; 
    margin-bottom: 30px;
`
export const ArrowDropDown = styled.img`
    width: 30px;
    height: 30px;
    margin: auto;
    margin-right: 10px;
`
export const HeaderDropDown = styled.button`
    background: ${colors.primary};
    // height: 38px;
    color: ${colors.secondary};
    border-radius: 10px;
    display: flex; 
    justify-content: space-between;
    margin: 0;
    z-index: 2;
    & h2{
        font-size: 18px;
        margin-left: 10px;
    }
    &:hover{
        cursor: pointer; 
    }
`

export const TextDropDown = styled.div`
    background: ${colors.backgroundLightGrey};
    margin: 0;
    border-radius: 20px;
    position: relative;
    bottom: 20px;
    z-index: 1;
    height: 0px;
    transform: translateY(-1000%);
    transition: transform 500ms, height 500ms;
    padding-top: 20px;
    & p{    
        color: ${colors.primary};
        font-size: 18px;
        margin: 10px;
    }
    ${(props) =>
    props.$isOpen &&`
        transform: translateY(0);
        transition: transform 500ms, height 500ms;
        height: 240px;
    `}
`