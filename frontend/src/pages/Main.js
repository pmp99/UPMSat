import React from 'react';
import './Main.css';
import {useSelector} from "react-redux";
import {Button, CircularProgress} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Main() {
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth)

    return (
        <div className="App">
            <h1>Welcome to UPMSat</h1>
            {auth.user || auth.loading || !auth.userLoaded ? null : <h4>Log in to see more options</h4>}
            {!auth.user ? null : !auth.userLoaded ? <CircularProgress/> :
                <div>
                    <Button onClick={() => navigate('HK Telemetry')}>HK Telemetry</Button>
                    <Button onClick={() => navigate('SC Telemetry')}>SC Telemetry</Button>
                    <Button onClick={() => navigate('Telecommand')}>Telecommand</Button>
                </div>
            }
        </div>
    );
}

export default Main;