
import React from 'react'

import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import ButtonLink from './ButtonLink';


const RoleBaseAuthorization = (UserComponent, Role, componentName) => {

    const WithAuthorization = () => {
        const { userDetails } = useSelector(state => state.userDetails)

        let hasRole = Role.some((t) => userDetails.role && userDetails.role.includes(t))
        if (hasRole) 
            return <UserComponent />
        if(userDetails.role)
            return <>This user don't have access to this {componentName} component 
        
                <ButtonLink to="homePage"/>
            </>
        return <Redirect to="/" />
    }
    return WithAuthorization


}




export default RoleBaseAuthorization