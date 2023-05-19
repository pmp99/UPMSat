import React, {useEffect, useState} from 'react';
import './Main.css';
import {useDispatch, useSelector} from "react-redux";
import {Button, CircularProgress} from "@mui/material";
import {getTable, resetErrors} from "../redux/upmsatSlice";
import {Navigate, useParams} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {TableVirtuoso} from 'react-virtuoso';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/es';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

function CassandraTable() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const upmsat = useSelector(state => state.upmsat)
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const {tableName} = useParams()

    useEffect(() => {
        if (auth.user && (!upmsat.table || upmsat.table.name !== tableName)) {
            dispatch(getTable({table: tableName, start: start ? Date.parse(start) : start, end: end ? Date.parse(end) : end}))
        }
    }, [auth.user])

    useEffect(() => {
        return () => dispatch(resetErrors())
    }, [])

    if (!auth.user && auth.userLoaded) {
        return <Navigate to={'/'} replace={true}/>
    } else if (!auth.user) {
        return(
            <div className="container">
                <CircularProgress/>
            </div>
        )
    }

    const VirtuosoTableComponents = {
        Scroller: React.forwardRef((props, ref) => (
            <TableContainer component={Paper} {...props} ref={ref} />
        )),
        Table: (props) => (
            <Table {...props} sx={{borderCollapse: 'separate', tableLayout: 'fixed'}} />
        ),
        TableHead,
        TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
        TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
    }

    function fixedHeaderContent() {
        return (
            <TableRow>
                {upmsat.table.columns.map((column) => (
                    <TableCell key={column.name} variant="head" align={'left'} style={{width: 200}} sx={{backgroundColor: 'background.paper'}}>
                        <span>{column.name}</span>
                    </TableCell>
                ))}
            </TableRow>
        )
    }

    function rowContent(_index, row) {
        return (
            <React.Fragment>
                {upmsat.table.columns.map((column) => (
                    <TableCell key={column.name} align={'left'}>
                        <span>{row[column.name]}</span>
                    </TableCell>
                ))}
            </React.Fragment>
        )
    }

    return (
        <div className="container">
            {!upmsat.loading ?
                <div style={{width: '100%', flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <h1 className="tableTitle">{tableName}</h1>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                        <div style={{display: 'flex', flexDirection: 'row', margin: "0 2rem 1.5rem 2rem", gap: '1rem'}}>
                            <DateTimePicker
                                label="Start"
                                value={start}
                                onChange={(v) => setStart(v)}
                                format="DD/MM/YYYY hh:mm:ss"
                            />
                            <DateTimePicker
                                label="End"
                                value={end}
                                onChange={(v) => setEnd(v)}
                                format="DD/MM/YYYY hh:mm:ss"
                            />
                            <Button variant={'outlined'} onClick={() => auth.user && dispatch(getTable({table: tableName, start: start ? Date.parse(start) : start, end: end ? Date.parse(end) : end}))}>
                                <RefreshRoundedIcon/>
                            </Button>
                        </div>
                    </LocalizationProvider>
                    {upmsat.table ?
                        <Paper style={{flex: 1, margin: "0 2rem 2rem 2rem"}}>
                            <TableVirtuoso
                                data={upmsat.table.rows}
                                components={VirtuosoTableComponents}
                                fixedHeaderContent={fixedHeaderContent}
                                itemContent={rowContent}
                            />
                        </Paper> : <p className="errorText">{upmsat.tableError}</p>}
                </div> : <CircularProgress/>}
        </div>
    );
}

export default CassandraTable;