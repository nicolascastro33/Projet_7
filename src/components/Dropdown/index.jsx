import {
  OneDropDrown,
  ArrowDropDown,
  TextDropDown,
  HeaderDropDown,
} from './style'
import Arrow from '../../assets/arrow-down-sign-to-navigate.png'
import { useState } from 'react'
import { useTheme } from '../../utils/hooks'
import "./style.css"

function DropDrown({ description, name }) {
  const url = window.location.pathname
  const cutUrl = url.substring(0,10)
  const isAccomodation = cutUrl === "/logements" ? "isAccomodation" : ""

  const { theme } = useTheme()
  const [dropDown, setDropDown] = useState(false)
  const isArray = Array.isArray(description)

  return (
    <OneDropDrown>
      <HeaderDropDown theme={theme} onClick={() => setDropDown(!dropDown)}>
        <h2 >{name}</h2>
        {dropDown ?(
          <ArrowDropDown theme={theme} $isOpen src={Arrow} alt="arrow-open" />
        ) : ( 
          <ArrowDropDown theme={theme} src={Arrow} alt="arrow-closed" />
        )}
        
      </HeaderDropDown>
      {!dropDown ? (
        <TextDropDown>
          {isArray ? (
            description?.map((description, index) => 
                <p key={index}>{description}</p>)
          ) : (
            <p>{description}</p>
          )}
        </TextDropDown>
      ) : (
        <TextDropDown $isOpen className={isAccomodation}>
          {isArray ? (
            description?.map((description, index) => 
              <p key={index}>{description}</p>)
          ) : (
            <p>{description}</p>
          )}
        </TextDropDown>
      )}
    </OneDropDrown>
  )
}

export default DropDrown
