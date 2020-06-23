import React from 'react'
import { useDispatch } from "react-redux";
import { Button } from '@material-ui/core';
import {logout} from '../redux/actions';
export default function LogoutButton() {
    const dispatch = useDispatch()

    return (
        <Button color="secondary" onClick={() => dispatch(logout("logout"))}>
            Logout
        </Button>
    )
}
