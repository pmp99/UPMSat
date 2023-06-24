import React, {useEffect, useRef, useState} from 'react';
import {Alert, Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField} from "@mui/material";
import Fade from "@mui/material/Fade";
import {createTelecommand} from "../redux/databaseSlice";
import {useDispatch, useSelector} from "react-redux";

function CreateTC(props) {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.database.createLoading)
    const error = useSelector(state => state.database.createError)
    const [kind, setKind] = useState('')
    const [data, setData] = useState()
    const [data2, setData2] = useState()
    const [errorOpened, setErrorOpened] = useState(false)
    const loaded = useRef(false)
    const {modalOpened, enums} = props

    useEffect(() => {
        if (loading) {
            loaded.current = true
        }
    }, [loading])

    useEffect(() => {
        if (loaded.current && error !== null) {
            setErrorOpened(true)
        }
    }, [error])

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(createTelecommand({kind: kind, data: data, data2: data2}))
    }

    return(
        <Fade in={modalOpened}>
            <div style={{position: 'absolute', left: '30%', right: '30%', borderRadius: '1rem',
                padding: '2rem', backgroundColor: 'white', boxShadow: '0px 2px 24px #383838'}}>
                <Snackbar
                    open={errorOpened}
                    autoHideDuration={4000}
                    onClose={() => setErrorOpened(false)}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                >
                    <Alert severity="error" variant="filled">
                        {error}
                    </Alert>
                </Snackbar>
                <Box
                    component="form"
                    className="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleCreate}
                >
                    <FormControl fullWidth>
                        <InputLabel>Kind</InputLabel>
                        <Select
                            value={kind}
                            label="Kind"
                            required
                            onChange={(e) => setKind(e.target.value)}
                        >
                            {enums['TC_Type']['kind'].map((e, i) => <MenuItem key={e} value={i.toString()}>{e}</MenuItem>)}
                        </Select>
                    </FormControl>
                    {kind ? Object.keys(enums['TC_Type'][enums['TC_Type']['kind'][kind]]).map((l, i) => {
                        if (enums['TC_Type'][enums['TC_Type']['kind'][kind]][l]) {
                            return(
                                <FormControl key={l} fullWidth>
                                    <InputLabel>{l}</InputLabel>
                                    <Select
                                        value={i === 0 ? (data || '') : (data2 || '')}
                                        label={l}
                                        required
                                        onChange={e => i === 0 ? setData(e.target.value) : setData2(e.target.value)}
                                    >
                                        {enums['TC_Type'][enums['TC_Type']['kind'][kind]][l].map((e, i) => <MenuItem key={e} value={i.toString()}>{e}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            )
                        } else {
                            return(
                                <TextField
                                    key={l}
                                    label={l}
                                    value={i === 0 ? data : data2}
                                    onChange={e => i === 0 ? setData(e.target.value) : setData2(e.target.value)}
                                    required
                                    variant="standard"
                                />
                            )
                        }
                    }) : null}
                    <Button type="submit" variant="contained" className="submitButton">
                        {loading ? <CircularProgress size="1.5rem" /> : 'Create'}
                    </Button>
                </Box>
            </div>
        </Fade>
    )
}

export default CreateTC;