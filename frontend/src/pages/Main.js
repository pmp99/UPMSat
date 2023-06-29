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
                    <div>
                        <Button size="large" style={{margin: '1rem'}} onClick={() => navigate('telemetry/hk')}>HK Telemetry</Button>
                        <Button size="large" style={{margin: '1rem'}} onClick={() => navigate('telemetry/sc')}>SC Telemetry</Button>
                        <Button size="large" style={{margin: '1rem'}} onClick={() => navigate('telecommand')}>Telecommand</Button>
                    </div>
                    <Button size="large" color="error" onClick={() => navigate('streaming')}>Streaming</Button>
                </div>
            }
        </div>
    );
}

export default Main;