import { OneDropDrown, ArrowDropDown, TextDropDown, HeaderDropDown } from "./style";
import Arrow from '../../assets/arrow.png'
import { useState } from "react";


function DropDrown({element, name}){
    const [dropDown, setDropDown] = useState(false)

    return(
            <OneDropDrown onClick={() => setDropDown(!dropDown)}>
                <HeaderDropDown>
                    <h2>{name}</h2>
                    <ArrowDropDown src={Arrow} alt='arrow' />
                </HeaderDropDown>
                
            {dropDown ? ( 
                <TextDropDown $isOpen>
                    <p>{element}</p>
                </TextDropDown>
            ) : (
                <TextDropDown >
                    <p>{element}</p>
                </TextDropDown>
            )}
            </OneDropDrown>
    )
}

export default DropDrown