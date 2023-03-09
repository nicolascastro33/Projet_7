import {
  OneDropDrown,
  ArrowDropDown,
  TextDropDown,
  HeaderDropDown,
} from './style'
import Arrow from '../../assets/arrow.png'
import { useState } from 'react'
import { useTheme } from '../../utils/hooks'

function DropDrown({ description, name }) {
  const { theme } = useTheme()
  const [dropDown, setDropDown] = useState(false)
  const isArray = Array.isArray(description)

  return (
    <OneDropDrown>
      <HeaderDropDown theme={theme} onClick={() => setDropDown(!dropDown)}>
        <h2 >{name}</h2>
        {!dropDown ?( 
          <ArrowDropDown theme={theme} src={Arrow} alt="arrow" />
        ) : (
          <ArrowDropDown theme={theme} $isOpen src={Arrow} alt="arrow" />
        )}
        
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
