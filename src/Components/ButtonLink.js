import React from 'react'
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function ButtonLink({to}) {
    return (
            <Button component={Link} to={to}>
                Navigate to {to}
            </Button>
        
    )
}
