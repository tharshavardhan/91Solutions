import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {login} from '../redux/actions';
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
    main: {
        display: "flex",
        height: "70vh",
        alignItems: 'center',
        justifyContent: 'center',

    }
}));

function Loginpage(props) {

    const {userDetails} = useSelector(state => state.userDetails)


    
    const dispatch = useDispatch()
    const classes = useStyles()
    const [value, setValue] = React.useState({
        name: '',
        password: '',
        showPassword: false,
    });

    const loginButton = async (e) => {
        e.preventDefault();
        const {name,password} = value;
        name !== '' && password !== '' ? dispatch(login(name)) : alert("Please fill both name and password")
        
    }

    const handleChange = prop => event => {
        setValue({ ...value, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValue({ ...value, showPassword: !value.showPassword });
    };

    useEffect(()=>{
        document.title = "LoginPage"
        userDetails.token && 
         props.history.push("/HomePage");

   
    },[userDetails,props.history])


    return (
        <Box className={classes.main} >
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item xs={10} lg={4} md={5} sm={8}>
                    <Box p={3} boxShadow={3}>

                        <form>

                            <Box fontSize="20px" >
                                Enter your Username and Password
                        </Box>

                            <Grid item xs={12}>

                                <TextField
                                    value={value.name}
                                    onChange={handleChange('name')}
                                    fullWidth
                                    id="outlined-email-input"
                                    label="Username"
                                    type="Username"
                                    name="Username"
                                    autoComplete="Username"
                                    margin="normal"
                                    variant="outlined"
                                    InputProps={{
                                        className: classes.textField,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <p
                                                >
                                                    <AccountCircleIcon>
                                                    </AccountCircleIcon>
                                                </p>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                            </Grid>

                            <Grid item xs={12}>
                                <div className={classes.loginCardTextbox}>
                                    <TextField


                                        id="outlined-adornment-password"
                                        fullWidth
                                        variant="outlined"
                                        // className={classes.textField}
                                        type={value.showPassword ? 'text' : 'password'}
                                        label="Password"
                                        value={value.password}
                                        onChange={handleChange('password')}
                                        InputProps={{
                                            className: classes.textField,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}

                                                    >
                                                        {value.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12}>

                                <Box pt={3}>

                                    <Button color="primary" variant="contained" onClick={loginButton} fullWidth>
                                        Login

                                </Button>
                                </Box>

                            </Grid>

                        </form>

                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}
export default (Loginpage)





