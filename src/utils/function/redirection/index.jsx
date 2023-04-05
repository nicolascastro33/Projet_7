function redirection(element){
    const url = window.location.origin
    if(element === undefined){
        window.location.replace(`${url}/error`)
    }
}

export default redirection