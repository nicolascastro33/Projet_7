import { ErrorMessageWrapper, ErrorWrapper, LinkErrorWrapper, DivWrapper } from "./style"
import { useEffect } from "react"

function Error() {

  useEffect(() =>{
    document.title = 'Kasa - Il y a un problème...'
})

  return (
    <DivWrapper>
      <ErrorWrapper>404</ErrorWrapper>
      <ErrorMessageWrapper>Oups! La page que vous demandez n'existe pas.</ErrorMessageWrapper>
      <LinkErrorWrapper to='/'>Retourner sur la page d’accueil</LinkErrorWrapper>
    </DivWrapper>
  )
}

export default Error
