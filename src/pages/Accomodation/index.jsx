import { useParams } from "react-router-dom"
import { Logement } from "../../logement"
import { useEffect } from "react"

function Accomodation(){
    const {id} = useParams()
    const element = Logement.find(element => element.id === id)
    
    useEffect(() =>{
        document.title = (`Kasa - Logement de ${element.host.name}`)
    })
    return(
        <h1>{element.id}</h1>
    )
}

export default Accomodation