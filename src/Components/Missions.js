import React from 'react'
import { Box, Typography } from '@material-ui/core'

const  Mission = ({ data }) => {

    return (
        <>
            {data.map((d, index) => <Box key={index} boxShadow={2} m={2} p={2} textAlign="left">
                <Typography variant="h6" >
                    Mission name : {d.mission_name}
                </Typography>
                <Typography>
                    Mission Id: {d.mission_id}
                    <br></br>
                    website: {d.website}
                    <br></br>

                    description: {d.description}

                </Typography>
            </Box>)}
        </>
    )
}

const Missions = React.memo(Mission)

export default Missions
