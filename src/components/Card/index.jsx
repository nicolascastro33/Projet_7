import { CardWrapper, CardWrapperLink, TextCardWrapper } from './style'
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/accueil-picture.jpg'
import { useTheme } from '../../utils/hooks'

function Card({ title, id }) {
  const {theme} = useTheme()
  const linkId = `/logements/${id}`
  return (
      <CardWrapperLink to={linkId}>
        <CardWrapper>
                  <TextCardWrapper theme={theme}>{title}</TextCardWrapper>
        </CardWrapper>
      </CardWrapperLink>
  )
}

Card.protoType = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
Card.defaultProps = {
  title: '',
  cover: DefaultPicture,
}

export default Card
