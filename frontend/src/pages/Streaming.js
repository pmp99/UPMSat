import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Button, CircularProgress} from "@mui/material";
import {get, merge} from 'lodash';
import {getEnums} from "../redux/databaseSlice";
import StyledModal from "./StyledModal";
import CreateTC from "./CreateTC";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Streaming() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const enums = useSelector(state => state.database.enums)
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
        if (auth.user && !enums) {
            dispatch(getEnums())
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

    const preprocess = (obj, type, parents = []) => {
        let res = {}
        Object.keys(obj).forEach(k => {
            if (!k.includes('fk_')) {
                if (typeof obj[k] === 'object') {
                    res[k] = preprocess(obj[k], type, parents.concat(k))
                } else {
                    let data = obj[k]
                    res[k] = k === 'data' && data !== null && get(enums[type], parents) ? get(enums[type], parents.concat(obj[k])) : data
                }
            }
        })
        return res
    }

    return(
        <div className="container">
            {enums ?
                <StyledModal
                    open={modalOpened}
                    onClose={() => setModalOpened(false)}
                >
                    <CreateTC modalOpened={modalOpened} enums={enums} />
                </StyledModal> : null}
            {enums ?
                <Button style={{position: 'absolute', right: '2rem', top: '6rem'}} variant="contained" onClick={() => setModalOpened(true)}>
                    <AddCircleIcon/>
                </Button> : null}
            <div style={{width: '100%', height: '100%', display: 'flex'}}>
                <div style={{flex: 1, margin: '1rem 2rem', flexDirection: 'column', display: 'flex'}}>
                    <h3>SCIENTIFIC</h3>
                    <div style={{flex: 1, overflowY: 'scroll'}}>
                        {Object.keys(sc.current).length === 0 ? <h5>No data</h5> :
                            <pre style={{fontSize: '0.7rem', lineHeight: '0.75rem'}}>{JSON.stringify(preprocess(sc.current, 'SC_TM_Type'), null, 8)}</pre>}
                    </div>
                </div>
                <div style={{flex: 1, margin: '1rem 2rem', flexDirection: 'column', display: 'flex'}}>
                    <h3>HOUSEKEEPING</h3>
                    <div style={{flex: 1, overflowY: 'scroll'}}>
                        {Object.keys(hk.current).length === 0 ? <h5>No data</h5> :
                            <pre style={{fontSize: '0.7rem', lineHeight: '0.75rem'}}>{JSON.stringify(preprocess(hk.current, 'HK_TM_Type'), null, 8)}</pre>}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Streaming;