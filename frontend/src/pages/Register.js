import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {register, resetErrors} from '../redux/authSlice';
import {Link, Navigate} from "react-router-dom";
import {Alert, Box, Button, Card, CircularProgress, Snackbar, TextField} from "@mui/material";

function Register() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const [errorOpened, setErrorOpened] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        if (auth.registerError) {
            setErrorOpened(true)
        }
    }, [auth.registerError])

    useEffect(() => {
        return () => dispatch(resetErrors())
    }, [])

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(register({username: username, email: email, password: password, confirmPassword: confirmPassword}))
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
                    {Array.isArray(auth.registerError) ? auth.registerError.join(' | ') : auth.registerError}
                </Alert>
            </Snackbar>
            <Card className="card">
                <Box
                    component="form"
                    className="form"
                    noValidate
                    autoComplete="off"
                    disabled={auth.loading}
                    onSubmit={handleRegister}
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
                        label="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                    <TextField
                        className="form-group"
                        label="Confirm password"
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                        variant="standard"
                    />
                    <Button disabled={auth.loading} type="submit" variant="contained" className="submitButton">
                        {auth.loading ?
                            <CircularProgress size="1.5rem" /> : 'Register'}
                    </Button>
                </Box>
                {auth.error ? <p>{auth.error}</p> : null}
                <div className="signup">
                    Already have an account? <Link to={'/login'}>Log in</Link>
                </div>
            </Card>
        </div>
    );
}

export default Register;