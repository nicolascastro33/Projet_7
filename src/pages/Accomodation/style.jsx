import styled from "styled-components";
import colors from "../../utils/style/colors";


export const AccomodationWrapper = styled.div`
    padding: 0 4% 0 4%;
    color: ${colors.primary};

`
export const InformationLogementWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ImageDebutWrapper = styled.img`
    margin-top: 30px;
    width: 100%;
    border-radius: 20px;
    max-height: 415px;
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
    // border: 1px solid black;
`
export const TagsWrapper = styled.h3`
    font-size: 14px;
    color: ${colors.secondary};
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

`
export const NameOwnerWrapper = styled.div`
    display: flex;
    margin: 20px 0 5px 10px;
    & h3{
        font-size: 18px;
        font-weight: normal;
        margin: auto;
        margin-right: 10px;
    }
`

export const OwnerPicture = styled.img`
    border-radius: 100%;
    width: 60px;
    height: 60px;
    margin: auto;
    margin-left: 0;
`



export const StarsWrapper = styled.div`
    display: flex;
    justify-content: center;    
`

export const AllDropDown = styled.div`
    color: ${colors.secondary};
    display: grid;
    grid-template-columns: 45% 45%;
    align-item: center; 
    justify-content: space-between;
    margin-top: 30px ;
`