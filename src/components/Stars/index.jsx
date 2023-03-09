import StarsEmpty from '../../assets/star-empty.svg'
import StarsFulled from '../../assets/star-primary.svg'

function Stars({rating}){
    const star = rating ? StarsFulled : StarsEmpty
    const altStar = rating ? 'étoile pleine' : 'étoile vide'
    return (
        <img src={star} alt={altStar}/>
    )
}

export default Stars