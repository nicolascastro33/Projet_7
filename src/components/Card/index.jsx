import { CardWrapper, TextCardWrapper, ImageWrapper } from './style'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DefaultPicture from '../../assets/accueil-picture.jpg'

function Card({ title, id, cover }) {
  const linkId = `/logements/${id}`
  return (
    <Link to={linkId}>
      <CardWrapper>
        <ImageWrapper src={cover} alt={title}/>
        <TextCardWrapper>{title}</TextCardWrapper>
      </CardWrapper>
    </Link>
  )
}

Card.protoType = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
Card.defaultProps = {
  name: 'hello',
  picture: DefaultPicture,
}

export default Card
