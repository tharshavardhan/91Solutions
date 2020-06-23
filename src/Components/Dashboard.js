import React, { useEffect } from 'react'
import LogoutButton from './LogoutButton';
import ButtonLink from './ButtonLink';
import Box from '@material-ui/core/Box'
export default function Dashboard() {
    useEffect(() => {
        document.title = 'Dashboard'
    }, [])
    return (
        <Box display="flex" justifyContent="space-around" p={3} bgcolor="text.hint">
            <Box fontSize={30}>
                Dashboard
                    </Box>

            <ButtonLink to="homePage" />
            <LogoutButton />

        </Box>
    )
}
