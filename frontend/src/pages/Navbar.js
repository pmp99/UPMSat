import React, {useEffect, useState} from 'react';
import './Navbar.css';
import {useDispatch, useSelector} from "react-redux";
import {getUser, logout} from "../redux/authSlice";
import {Button, ListItemIcon, Menu, MenuItem} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import SensorsIcon from '@mui/icons-material/Sensors';
import {Link, useLocation, useNavigate} from "react-router-dom";

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [anchorEl, setAnchorEl] = useState(null)
    const auth = useSelector(state => state.auth)
    const user = auth.user

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    const onLogout = () => {
        handleClose()
        dispatch(logout())
    }

    return (
        <nav className="navbar">
            <div className="navbarLogoDiv">
                <Link className="navbarLogo" to={'/'}>
                    <img src="/HERCCULES_Logo_Hori.png" alt="Herccules" style={{height: '100%'}}/>
                </Link>
            </div>
            {location.pathname === '/' ? null :
                <h1 className="tableTitle">{location.pathname.includes('hk') ? 'Housekeeping Telemetry' : location.pathname.includes('sc') ? 'Scientific Telemetry' :
                    location.pathname.includes('telecommand') ? 'Telecommand' : ''}</h1>}
            {location.pathname.includes('streaming') ? <SensorsIcon color="error" fontSize="large" /> : null}
            <div className="navbarButtons">
                {!user && auth.userLoaded && <Button onClick={() => navigate('login')}>Log in</Button>}
                {!user && auth.userLoaded && <Button variant="contained" onClick={() => navigate('register')}>Register</Button>}
                {user ?
                    <div>
                        <Button
                            size="large"
                            className="profileButton"
                            onClick={handleClick}
                            endIcon={<AccountCircleIcon />}
                        >
                            <span className="username">{user.username}</span>
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem >
                                <ListItemIcon><EditIcon/></ListItemIcon>
                                Edit profile
                            </MenuItem>
                            <MenuItem onClick={onLogout}>
                                <ListItemIcon><LogoutIcon sx={{color: 'red'}}/></ListItemIcon>
                                Log out
                            </MenuItem>
                        </Menu>
                    </div> : null}
            </div>
        </nav>
    );
}

export default Navbar;