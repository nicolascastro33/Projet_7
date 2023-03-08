import {
  OneDropDrown,
  ArrowDropDown,
  TextDropDown,
  HeaderDropDown,
} from './style'
import Arrow from '../../assets/arrow.png'
import { useState } from 'react'

function DropDrown({ description, name }) {
  const [dropDown, setDropDown] = useState(false)
  const isArray = Array.isArray(description)

  return (
    <OneDropDrown>
      <HeaderDropDown onClick={() => setDropDown(!dropDown)}>
        <h2>{name}</h2>
        <ArrowDropDown src={Arrow} alt="arrow" />
      </HeaderDropDown>
      {!dropDown ? (
        <TextDropDown>
          {isArray ? (
            description?.map((description, index) => 
                <p>{description}</p>)
          ) : (
            <p>{description}</p>
          )}
        </TextDropDown>
      ) : (
        <TextDropDown $isOpen>
          {isArray ? (
            description?.map((description, index) => <p>{description}</p>)
          ) : (
            <p>{description}</p>
          )}
        </TextDropDown>
      )}
    </OneDropDrown>
  )
}

export default DropDrown
