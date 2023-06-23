import React from 'react';
import './Main.css';
import {useSelector} from "react-redux";
import {Button, CircularProgress} from "@mui/material";
import {useNavigate} from "react-router-dom";
import SensorsIcon from '@mui/icons-material/Sensors';

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
                        <Button style={{margin: '1rem'}} onClick={() => navigate('telemetry/hk')}>HK Telemetry</Button>
                        <Button style={{margin: '1rem'}} onClick={() => navigate('telemetry/sc')}>SC Telemetry</Button>
                        <Button style={{margin: '1rem'}} onClick={() => navigate('telecommand')}>Telecommand</Button>
                    </div>
                    <Button color="error" startIcon={<SensorsIcon/>} onClick={() => navigate('streaming')}>Streaming</Button>
                </div>
            }
        </div>
    );
}

export default Main;