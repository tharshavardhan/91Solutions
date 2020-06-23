import React, { useEffect } from 'react'
import LogoutButton from './LogoutButton';
import ButtonLink from './ButtonLink';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import HomePageContainer from '../Container/HomePageContainer';
import Missions from './Missions';
import Rockets from './Rockets';
import History from './History'



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,

    },
}));

export default function HomePage() {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    useEffect(() => {
        document.title = 'HomePage'
    }, [])
    return (
        <div>
            <Box display="flex" justifyContent="space-around" p={3} bgcolor="text.hint">

                <Box fontSize={30}>
                HomePage
                    </Box> 
            <LogoutButton />

                <ButtonLink to="dashboard" />
            </Box >
            <div className={classes.root}>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="MISSIONS" />
                    <Tab label="ROCKETS" />
                    <Tab label="HISTORY" />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                
                >
                    <Box   >
                        <HomePageContainer
                            path='missions'
                        >
                            {({ loading, data, error }) => {
                                if (loading) return "loading ..."
                                if (error) throw new Error('I crashed!');

                                return <Missions
                                    data={data}
                                />
                            }}
                        </HomePageContainer>
                    </Box>
                    <Box   >
                        <HomePageContainer
                            path='rockets'
                        >
                            {({ loading, data, error }) => {
                                if (loading) return "loading ..."
                                if (error) throw new Error('I crashed!');
                                return <Rockets
                                    data={data}
                                />
                            }}
                        </HomePageContainer>
                    </Box>
                    <Box >
                        <HomePageContainer
                            path='history'
                        >
                            {({ loading, data, error }) => {
                                if (loading) return "loading ..."
                                if (error) throw new Error('I crashed!');
                                return <History
                                    data={data}
                                />
                            }}
                        </HomePageContainer>
                    </Box>
                </SwipeableViews>
            </div>
        </div>
    )
}
