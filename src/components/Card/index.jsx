import { CardWrapper, CardWrapperLink, TextCardWrapper, ImageCardWrapper } from './style'
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/accueil-picture.jpg'
import { useTheme } from '../../utils/hooks'

function Card({ title, cover, id }) {
  const {theme} = useTheme()
  const linkId = `/logements/${id}`
  return (
      <CardWrapperLink to={linkId}>
        <CardWrapper>
            <TextCardWrapper theme={theme}>{title}</TextCardWrapper>
            <ImageCardWrapper src={cover} alt="cover appartement"></ImageCardWrapper>
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
