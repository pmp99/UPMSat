import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login, resetErrors} from '../redux/authSlice';
import {Link, Navigate} from "react-router-dom";
import {Alert, Box, Button, Card, CircularProgress, Snackbar, TextField} from "@mui/material";

function Login() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const [errorOpened, setErrorOpened] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (auth.loginError) {
            setErrorOpened(true)
        }
    }, [auth.loginError])


    useEffect(() => {
        return () => dispatch(resetErrors())
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login({username: username, password: password}))
    }

    if (auth.user) {
        return <Navigate to={'/'} replace={true}/>
    }

    return (
        <div className="container">
            <Snackbar
                open={errorOpened}
                autoHideDuration={4000}
                onClose={() => setErrorOpened(false)}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            >
                <Alert severity="error" variant="filled">
                    {Array.isArray(auth.loginError) ? auth.loginError.join(' | ') : auth.loginError}
                </Alert>
            </Snackbar>
            <Card className="card">
                <Box
                    component="form"
                    className="form"
                    noValidate
                    autoComplete="off"
                    disabled={auth.loading}
                    onSubmit={handleLogin}
                >
                    <TextField
                        className="form-group"
                        label="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        variant="standard"
                    />
                    <TextField
                        className="form-group"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        variant="standard"
                    />
                    <Button disabled={auth.loading} type="submit" variant="contained" className="submitButton">
                        {auth.loading ?
                            <CircularProgress size="1.5rem" /> : 'Log in'}
                    </Button>
                </Box>
                <div className="signup">
                    Don't have an account? <Link to={'/register'}>Register</Link>
                </div>
            </Card>
        </div>
    );
}

export default Login;