import styled from "styled-components";
import colors from "../../utils/style/colors";


export const AccomodationWrapper = styled.div`
    padding: 0 4% 0 4%;
    color: ${colors.primary};

`
export const InformationLogementWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 1000px){
        flex-direction: column;
    }
`

export const FirstPartInformation = styled.div`
`

export const TitleWrapper = styled.h1`
    font-size: 36px;
    width: 70%;
`

export const MapsLogement = styled.h2`
    font-size: 18px;
`

export const AllTagsWrapper = styled.div`
    display: flex;
`

export const TagsWrapper = styled.h3`
    font-size: 14px;
    color: ${({theme}) => (theme === 'dark' ? colors.darkMode : colors.secondary)};
    background: ${colors.primary}; 
    border-radius: 50px;
    text-align: center;
    margin-right: 10px; 
    width: 130px;
    height: 20px;
`

export const RatingWrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 25%;
    @media(max-width: 1000px){
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
    }
    @media(max-width: 500px){
        flex-direction: column-reverse;
        justify-content: start;
    }


`
export const NameOwnerWrapper = styled.div`
    display: flex;
    margin: 20px 0 5px 10px;
    & h3{
        font-size: 18px;
        font-weight: normal;
        margin: auto;
        margin-right: 10px;
        @media(max-width: 500px){
            margin-left: unset;
        }
    }
    @media(max-width: 500px){
        display: flex;
        margin-top: 10px;
    }

`

export const OwnerPicture = styled.img`
    border-radius: 100%;
    width: 60px;
    height: 60px;
    margin: auto;
    margin-left: 0;
    @media(max-width: 500px){
        margin: ;
    }
`

export const StarsWrapper = styled.div`
    display: flex;
    justify-content: center;  
    @media(max-width: 500px){
        justify-content: unset;
    }

`

export const AllDropDown = styled.div`
    color: ${colors.secondary};
    display: grid;
    grid-template-columns: 45% 45%;
    align-item: center; 
    justify-content: space-between;
    margin-top: 30px;
    @media(max-width: 1000px){
        display: flex;
        flex-direction: column;
    }
`