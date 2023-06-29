import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Button, CircularProgress} from "@mui/material";
import {getEnums} from "../redux/databaseSlice";
import StyledModal from "./StyledModal";
import CreateTC from "./CreateTC";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StreamingData from "./StreamingData";

function Streaming() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const enums = useSelector(state => state.database.enums)
    const [modalOpened, setModalOpened] = useState(false)

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
            <StreamingData enums={enums}/>
        </div>
    )

}

export default Streaming;