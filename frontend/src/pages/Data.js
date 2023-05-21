import React, {useEffect, useState} from 'react';
import './Main.css';
import {useDispatch, useSelector} from "react-redux";
import {Button, CircularProgress} from "@mui/material";
import {getTable} from "../redux/upmsatSlice";
import {Navigate, useParams} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {TableVirtuoso} from 'react-virtuoso';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/es';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';

function Data() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const upmsat = useSelector(state => state.upmsat)
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [open, setOpen] = useState()
    const {tableName} = useParams()

    useEffect(() => {
        if (auth.user) {
            dispatch(getTable({table: tableName, start: start ? Math.round(Date.parse(start)/1000) : start, end: end ? Math.round(Date.parse(end)/1000) : end}))
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

    const VirtuosoTableComponents = {
        Scroller: React.forwardRef((props, ref) => (
            <TableContainer component={Paper} {...props} ref={ref} />
        )),
        Table: (props) => (
            <Table {...props} sx={{borderCollapse: 'separate', tableLayout: 'fixed'}} />
        ),
        TableHead: (props) => <ListItem {...props} style={{height: '4rem'}} />,
        TableRow: ({ item: _item, ...props }) => <div {...props} style={{width: '100%', flex: 1}} />,
        TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
    }

    const isData = (d) => {
        return typeof d !== 'object' || d['data'] !== undefined || (d['iid'] && Object.keys(d).length === 1)
    }

    const getData = (d) => {
        return typeof d !== 'object' ? d : (d['data'] !== undefined ? d['data'] : d['iid'])
    }

    function fixedHeaderContent() {
        return (
            <>
                {Object.keys(upmsat.table[0]).map(column => {
                    if (!column.includes('fk_') && isData(upmsat.table[0][column])) {
                        return(
                            <div key={column} style={{backgroundColor: 'background.paper', flex: 1, justifyContent: 'flex-start'}}>
                                <span>{column}</span>
                            </div>
                        )
                    } else {
                        return null
                    }
                })}
                <div style={{backgroundColor: 'background.paper', width: '3rem'}}/>
            </>
        )
    }

    function rowContent(_index, row) {
        return (
            <>
                <ListItemButton style={{height: '4rem'}} onClick={() => setOpen(prevState => prevState === undefined || prevState !== row['iid'] ? row['iid'] : undefined)}>
                    <div style={{display: 'flex', height: '100%', alignItems: 'center', marginHorizontal: '2rem', width: '100%'}} >
                        {Object.keys(row).map(column => {
                            if (!column.includes('fk_') && isData(row[column])) {
                                return(
                                    <div key={column} style={{flex: 1, justifyContent: 'flex-start'}}>
                                        <span>{getData(row[column])}</span>
                                    </div>
                                )
                            } else {
                                return null
                            }
                        })}
                        <div style={{width: '3rem', textAlign: 'right'}}>
                            {open === row['iid'] ? <ExpandLess/> : <ExpandMore/>}
                        </div>
                    </div>
                </ListItemButton>
                <Collapse in={open === row['iid']} timeout="auto" unmountOnExit>
                    <div style={{height: '4rem', backgroundColor: 'blue'}}/>
                </Collapse>
            </>
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
                            <Button variant={'outlined'} onClick={() => auth.user && dispatch(getTable({table: tableName, start: start ? Math.round(Date.parse(start)/1000) : start, end: end ? Math.round(Date.parse(end)/1000) : end}))}>
                                <RefreshRoundedIcon/>
                            </Button>
                        </div>
                    </LocalizationProvider>
                    {upmsat.table && upmsat.table.length > 0 ?
                        <Paper style={{flex: 1, margin: "0 2rem 2rem 2rem"}}>
                            <TableVirtuoso
                                data={upmsat.table}
                                components={VirtuosoTableComponents}
                                fixedHeaderContent={fixedHeaderContent}
                                itemContent={rowContent}
                            />
                        </Paper> : <p className="errorText">{upmsat.table ? 'No data available' : upmsat.tableError}</p>}
                </div> : <CircularProgress/>}
        </div>
    );
}

export default Data;