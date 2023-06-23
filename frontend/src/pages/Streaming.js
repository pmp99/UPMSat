import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Button, CircularProgress} from "@mui/material";
import {merge} from 'lodash';
import {getTCkind} from "../redux/databaseSlice";
import StyledModal from "./StyledModal";
import CreateTC from "./CreateTC";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Streaming() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const tcKind = useSelector(state => state.database.tcKind)
    const hk = useRef({})
    const sc = useRef({})
    const [update, setUpdate] = useState(false)
    const [modalOpened, setModalOpened] = useState(false)

    useEffect(() => {
        const eventSource = new EventSource("https://localhost:8443/api/streaming", {withCredentials: true})
        eventSource.onmessage = e => {
            const data = JSON.parse(e.data)
            if (data.type === 'hk') {
                merge(hk.current, data.data)
                setUpdate(prevState => !prevState)
            } else if (data.type === 'sc') {
                merge(sc.current, data.data)
                setUpdate(prevState => !prevState)
            }
        }
        return () => eventSource.close()
    }, [])

    useEffect(() => {
        if (auth.user && !tcKind) {
            dispatch(getTCkind())
        }
    }, [auth.user])


    if (!auth.user && auth.userLoaded) {
        return <Navigate to={'/'} replace={true}/>
    } else if (!auth.user) {
        return(
            <div className="container">
                <CircularProgress/>
            </div>
        )
    }

    return(
        <div className="container">
            {tcKind ?
                <StyledModal
                    open={modalOpened}
                    onClose={() => setModalOpened(false)}
                >
                    <CreateTC modalOpened={modalOpened} tcKind={tcKind} />
                </StyledModal> : null}
            {tcKind ?
                <Button style={{position: 'absolute', right: '2rem', top: '6rem'}} variant="contained" onClick={() => setModalOpened(true)}>
                    <AddCircleIcon/>
                </Button> : null}
            <div style={{width: '100%', height: '100%', display: 'flex'}}>
                <div style={{flex: 1, margin: '1rem 2rem', flexDirection: 'column', display: 'flex'}}>
                    <h3>SCIENTIFIC</h3>
                    <div style={{flex: 1, overflowY: 'scroll'}}>
                        {Object.keys(sc.current).length === 0 ? <h5>No data</h5> :
                            <pre style={{fontSize: '0.7rem', lineHeight: '0.75rem'}}>{JSON.stringify(sc.current, (key, value) => key.includes("fk_") ? undefined : value, 8)}</pre>}
                    </div>
                </div>
                <div style={{flex: 1, margin: '1rem 2rem', flexDirection: 'column', display: 'flex'}}>
                    <h3>HOUSEKEEPING</h3>
                    <div style={{flex: 1, overflowY: 'scroll'}}>
                        {Object.keys(hk.current).length === 0 ? <h5>No data</h5> :
                            <pre style={{fontSize: '0.7rem', lineHeight: '0.75rem'}}>{JSON.stringify(hk.current, (key, value) => key.includes("fk_") ? undefined : value, 8)}</pre>}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Streaming;