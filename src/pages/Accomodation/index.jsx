import { useParams } from "react-router-dom"
import { Logement } from "../../logement"

function Accomodation(){
    const {id} = useParams()
    function FoundElements({logement, id}){
        return Logement.find((element) =>{
            return element.id === id 
        })
    }
    const elements = FoundElements({Logement, id})
    console.log({elements})
    return(
        <h1>{id}</h1>
    )
}

export default Accomodation