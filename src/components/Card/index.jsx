import { CardWrapperLink, TextCardWrapper, ImageWrapper } from './style'
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/accueil-picture.jpg'
import { useTheme } from '../../utils/hooks'

function Card({ title, id, cover }) {
  const {theme} = useTheme()
  const linkId = `/logements/${id}`
  return (
      <CardWrapperLink to={linkId}>
        <ImageWrapper src={cover} alt={title}/>
        <TextCardWrapper theme={theme}>{title}</TextCardWrapper>
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
