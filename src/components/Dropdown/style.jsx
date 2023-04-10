import styled from "styled-components";
import colors from "../../utils/style/colors";


export const OneDropDrown = styled.div`
    display: flex; 
    flex-direction: column;
    overflow: hidden; 
    margin-bottom: 30px;
    border-radius: 10px;

`
export const ArrowDropDown = styled.img`
    width: 30px;
    height: 30px;
    margin: auto;
    margin-right: 10px;
    transition: all 500ms ease-in-out;
    transform: rotate(0deg);
    filter: invert(100%);
    -webkit-filter: invert(100%);
    ${({theme}) => (theme ==='dark' && `
        filter: invert(25%);`
    )}
    ${(props) =>
        props.$isOpen &&`
            transform: rotate(180deg);
            transition: all 500ms ease-in-out;
            `
    }
`
export const HeaderDropDown = styled.button`
    background: ${colors.primary};
    color: ${colors.secondary};
    border-radius: 10px;
    display: flex; 
    justify-content: space-between;
    margin: 0;
    z-index: 2;
    & h2{
        font-size: 18px;
        margin-left: 10px;
        color: ${({theme}) => (theme === 'dark' ? colors.darkMode : colors.secondary )}
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
    padding-top: 20px;
    padding-bottom: 10px;
    overflow: hidden;
    z-index: 1;
    max-height: 0px;
    transform: translateY(-300px);
    opacity: 0;
    transition: all 500ms ease-in-out;
    ${(props) =>
        props.$isOpen &&`
            transform: translateY(0);
            transition: all 500ms ease-in-out;
            max-height: 2000px;
            opacity: 1;
        `
    }
    
    & p{    
        color: ${colors.primary};
        font-size: 18px;
        margin: 10px;
    }
`