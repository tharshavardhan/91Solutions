const initalState = {
    userDetails: {}
}


export default function games(state = initalState, action) {
    switch (action.type) {
        case "admin":
            return {
                ...state,
                userDetails: {
                    name: 'Admin',
                    role: ['admin', 'read', 'write'],
                    token: 'adscvnslnflsdnflnsdlnfsd'
                }
            }
        case "user":
            return {
                ...state,
                userDetails: {
                    name: 'user',
                    role: ['read'],
                    token: 'adscvnslnflsdnflnsdlnfsd'
                }
            }
        case "logout":
            return {
                userDetails : {}
            }
        default:
            return state

    }
}