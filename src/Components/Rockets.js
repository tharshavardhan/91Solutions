import React from 'react'
import { Box, Typography } from '@material-ui/core'

const  Rocket = ({ data }) => {

    return (
        <>
            {data.map((d, index) => <Box key={index} boxShadow={2} m={2} p={2} textAlign="left">
                <Typography variant="h6" >
                    Rocket name : {d.rocket_name}
                </Typography>
                <Typography>
                    company: {d.company}
                    <br></br>
                    country: {d.country}
                    <br></br>

                    description: {d.description}

                </Typography>
            </Box>)}
          
        </>
    )
}

const Rockets = React.memo(Rocket)

export default Rockets
