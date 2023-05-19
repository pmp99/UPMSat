import React, {useEffect} from 'react';
import './Main.css';
import {useDispatch, useSelector} from "react-redux";
import {Button, CircularProgress} from "@mui/material";
import {getTables, resetErrors} from "../redux/upmsatSlice";
import {useNavigate} from "react-router-dom";

function Main() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth)
    const upmsat = useSelector(state => state.upmsat)

    useEffect(() => {
        if (auth.user && !upmsat.tables) {
            dispatch(getTables())
        }
    }, [auth.user])

    useEffect(() => {
        return () => dispatch(resetErrors())
    }, [])

    return (
        <div className="App">
            <h1>Welcome to UPMSat</h1>
            {auth.user || auth.loading || !auth.userLoaded ? null : <h4>Log in to see more options</h4>}
            {!auth.user ? null : upmsat.loading || !auth.userLoaded ? <CircularProgress/> :
                <div>
                    {upmsat.tables ?
                        <div>
                            {upmsat.tables.map(t => {
                                let name = t.name
                                return <Button key={name} onClick={() => navigate(name)}>{name}</Button>
                            })}
                        </div> : <p className="errorText">{upmsat.tablesError}</p>}
                </div>
            }
        </div>
    );
}

export default Main;