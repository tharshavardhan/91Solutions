import React from 'react'
import { Box, Typography } from '@material-ui/core'

const HistoryFun = ({ data }) => {

    return (
        <>
            {data.map((d, index) => <Box key={index} boxShadow={2} m={2} p={2} textAlign="left">
                <Typography variant="h6" >
                    Title : {d.title}
                </Typography>
                <Typography>
                Event date unix: {d.event_date_unix}
                 <br></br>
                    Event date utc: {d.event_date_utc}
                 <br></br>
                    
                    Flight number: {d.flight_number}
                  
                </Typography>
            </Box>)}
        </>
    )
}
const History = React.memo(HistoryFun)

export default History
