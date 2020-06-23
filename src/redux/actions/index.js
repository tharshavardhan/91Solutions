export function login(name) {
    console.time(1)
    return dispatch => {
        fetch('https://run.mocky.io/v3/0d249d2f-7bf4-4f30-aea1-c7eb9c16a880')
            .then(response => response.json())
            .then(()=>console.timeEnd(1))
            .then(json => dispatch({
                type: name,

            }))
    }
}


export function logout(dispatch) {
   
    return ({
        type: "logout",
    })

}