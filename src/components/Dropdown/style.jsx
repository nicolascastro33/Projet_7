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
    transition-delay: 200ms;
    transition-property: transform;
    transform: rotate(0deg);
    ${({theme}) => (theme ==='dark' && `
        filter: invert(80%);`
    )}
    ${(props) =>
        props.$isOpen &&`
            transform: rotate(180deg);
            transition-delay: 200ms;
            transition-property: transform;
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
    ${({theme}) => (theme === 'dark' && `
    border: 1px solid black;`
    )}
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
    z-index: 1;
    height: 0px;
    transform: translateY(-500px);
    opacity: 0;
    transition: transform 1000ms, height 1000ms, opacity 1000ms;
    padding-top: 20px;
    padding-bottom: 10px;
    overflow: hidden;
    // overflow-wrap: break-word;
    ${(props) =>
    props.$isOpen &&`
        transform: translateY(0);
        transition: transform 1000ms, height 1000ms, opacity 400ms;
        height: 240px;
        opacity: 1;
    `}
    & p{    
        color: ${colors.primary};
        font-size: 18px;
        margin: 10px;
    }
`