import React, {useEffect, useRef, useState} from 'react';
import './Main.css';
import {useDispatch, useSelector} from "react-redux";
import {Button, CircularProgress, TextField} from "@mui/material";
import {getTable, editTelecommand} from "../redux/upmsatSlice";
import {Navigate} from "react-router-dom";
import Paper from '@mui/material/Paper';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {Virtuoso} from 'react-virtuoso';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/es';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRight from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import TreeItem, {treeItemClasses} from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import {styled} from '@mui/material/styles';
import {get} from 'lodash';

function Data(props) {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const upmsat = useSelector(state => state.upmsat)
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [open, setOpen] = useState()
    const treeKeys = useRef([])
    const [expanded, setExpanded] = useState([])
    const [editable, setEditable] = useState(null)
    const {tm} = props

    useEffect(() => {
        if (auth.user) {
            dispatch(getTable({table: tm ? tm : 'tc', start: start ? Math.round(Date.parse(start)/1000) : start, end: end ? Math.round(Date.parse(end)/1000) : end}))
        }
    }, [auth.user])

    useEffect(() => {
        editable !== null && setEditable(null)
    }, [upmsat.table?.data])

    if (!auth.user && auth.userLoaded) {
        return <Navigate to={'/'} replace={true}/>
    } else if (!auth.user) {
        return(
            <div className="container">
                <CircularProgress/>
            </div>
        )
    }

    const isData = (d) => {
        return typeof d !== 'object' || d['data'] !== undefined || (d['iid'] && Object.keys(d).length === 1)
    }

    const getData = (d) => {
        return typeof d !== 'object' ? d : (d['data'] !== undefined ? d['data'] : d['iid'])
    }

    const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
        color: theme.palette.text.secondary,
        [`& .${treeItemClasses.content}`]: {
            color: theme.palette.text.secondary,
            borderTopRightRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
            padding: 0,
            width: 'auto',
            fontWeight: theme.typography.fontWeightMedium,
            '&.Mui-expanded': {
                fontWeight: theme.typography.fontWeightRegular,
            },
            '&:hover': {
                backgroundColor: theme.palette.action.hover,
            },
            '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
                backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
                color: 'var(--tree-view-color)',
            },
            [`& .${treeItemClasses.label}`]: {
                fontWeight: 'inherit',
                color: 'inherit',
            }
        },
        [`& .${treeItemClasses.group}`]: {
            marginLeft: '1.5rem',
            [`& .${treeItemClasses.content}`]: {
                paddingLeft: theme.spacing(2)
            }
        }
    }))

    function StyledTreeItem(props) {
        const {labelInfo, labelText, editing, onEdit, parents, ...other} = props

        return (
            <StyledTreeItemRoot
                label={
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <span>{labelText}</span>
                        {labelInfo === null ? null : editing ?
                            <TextField
                                style={{marginRight: '1rem', fontSize: '0.9rem'}}
                                hiddenLabel
                                variant="outlined"
                                size="small"
                                defaultValue={get(editable, parents)}
                                onBlur={e => onEdit(e.target.value)}
                            /> : <span style={{marginRight: '1rem', fontSize: '0.9rem'}}>{labelInfo}</span>}
                    </div>
                }
                {...other}
            />
        )
    }

    const renderTree = (data, editing, parents) => {
        return Object.keys(data).filter(e => !e.includes('fk_')).map((k, _, keys) => {
            const id = data.iid + parents.join('') + k
            if (typeof data[k] === 'object' && !treeKeys.current.includes(id)) {
                treeKeys.current.push(id)
            }
            const edit = editing && typeof data[k] !== 'object' && (k !== 'iid' || (k === 'iid' && keys.length === 1))
            return(
                <StyledTreeItem key={id} nodeId={id} labelText={k} labelInfo={typeof data[k] !== 'object' ? data[k] : null} editing={edit} parents={parents.concat(k)}
                                onEdit={(value) => setEditable(prevState => {
                                    let p = parents.concat(k)
                                    let o = p.reduceRight((obj, elem) => ({[elem]: obj}), value)
                                    return {...prevState, ...o}
                                })}>
                    {typeof data[k] === 'object' ? renderTree(data[k], editing, parents.concat(k)) : null}
                </StyledTreeItem>
            )
        })
    }

    const header = () => {
        if (!upmsat.table || !upmsat.table.data || upmsat.table.data.length === 0) {
            return null
        }
        return (
            <div style={{display: 'flex', alignItems: 'center', padding: '0.5rem 1rem 1rem 1rem'}}>
                {Object.keys(upmsat.table.data[0]).map(column => {
                    if (!column.includes('fk_') && isData(upmsat.table.data[0][column])) {
                        return(
                            <div key={column} style={{flex: 1, justifyContent: 'flex-start'}}>
                                <span>{column}</span>
                            </div>
                        )
                    } else {
                        return null
                    }
                })}
                <div style={{width: '3rem'}}/>
            </div>
        )
    }

    function rowContent(index, row) {
        let columns = []
        return (
            <Paper style={{marginBottom: '0.4rem'}}>
                <ListItemButton style={{height: '3rem', width: '100%', padding: '0 1rem 0 1rem'}}
                                onClick={() => {
                                    treeKeys.current = []
                                    setExpanded([])
                                    !tm && setEditable(null)
                                    setOpen(prevState => prevState === undefined || prevState !== row['iid'] ? row['iid'] : undefined)
                                }}>
                    <div style={{display: 'flex', height: '100%', alignItems: 'center', width: '100%'}} >
                        {Object.keys(row).map(column => {
                            if (!column.includes('fk_') && isData(row[column])) {
                                return(
                                    <div key={column} style={{flex: 1, justifyContent: 'flex-start'}}>
                                        <span>{getData(row[column])}</span>
                                    </div>
                                )
                            } else {
                                !column.includes('fk_') && columns.push(column)
                                return null
                            }
                        })}
                        <div style={{width: '3rem', textAlign: 'right'}}>
                            {open === row['iid'] ? <ExpandLess/> : <ExpandMore/>}
                        </div>
                    </div>
                </ListItemButton>
                <Collapse in={open === row['iid']} timeout="auto" unmountOnExit>
                    <div style={{padding: '1rem', borderTop: '1px solid darkgray'}}>
                        <div style={{marginBottom: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                            <Button onClick={() => setExpanded(oldExpanded => oldExpanded.length === 0 ? treeKeys.current.slice(0) : [])}>
                                {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
                            </Button>
                            {!tm ?
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    {editable !== null ? <span className="errorText" style={{fontSize: '0.9rem'}}>{upmsat.editError}</span> : null}
                                    {editable !== null ? <Button style={{marginLeft: '1rem'}} onClick={() => setEditable(null)}>Cancel</Button> : null}
                                    <Button style={{marginLeft: '1rem'}} variant="contained" startIcon={editable === null ? <EditIcon/> : upmsat.editLoading ? null : <SaveIcon/>}
                                            onClick={() => {
                                                if (editable !== null) {
                                                    dispatch(editTelecommand(editable))
                                                } else {
                                                    setEditable(JSON.parse(JSON.stringify(row)))
                                                }
                                            }}>
                                        {editable === null ? 'Edit' : upmsat.editLoading ? 'Loading' : 'Save'}
                                    </Button>
                                </div> : null}
                        </div>
                        <TreeView
                            defaultCollapseIcon={<ExpandMore />}
                            defaultExpandIcon={<ChevronRight />}
                            expanded={expanded}
                            onNodeToggle={(_, nodes) => setExpanded(nodes)}
                        >
                            {renderTree(row, editable !== null, [])}
                        </TreeView>
                    </div>
                </Collapse>
            </Paper>
        )
    }

    return (
        <div className="container">
            {!upmsat.loading ?
                <div style={{width: '100%', flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <h1 className="tableTitle">{tm === 'hk' ? 'Housekeeping Telemetry' : tm === 'sc' ? 'Scientific Telemetry' : 'Telecommand'}</h1>
                    {tm ?
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
                                <Button variant={'outlined'} onClick={() => auth.user && dispatch(getTable({table: tm ? tm : 'tc', start: start ? Math.round(Date.parse(start)/1000) : start, end: end ? Math.round(Date.parse(end)/1000) : end}))}>
                                    <RefreshRoundedIcon/>
                                </Button>
                            </div>
                        </LocalizationProvider> : null}
                    {upmsat.table && upmsat.table.data && upmsat.table.data.length > 0 && upmsat.table.name === (tm ? tm : 'tc') ?
                        <div style={{flex: 1, margin: "0 2rem 2rem 2rem"}}>
                            {header()}
                            <Virtuoso
                                data={upmsat.table.data}
                                itemContent={rowContent}
                            />
                        </div> : <p className="errorText">{upmsat.table?.data?.length === 0 ? 'No data available' : upmsat.tableError}</p>}
                </div> : <CircularProgress/>}
        </div>
    );
}

export default Data;