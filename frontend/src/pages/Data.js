import React, {useEffect, useRef, useState} from 'react';
import './Main.css';
import {useDispatch, useSelector} from "react-redux";
import {
    Alert,
    Button,
    CircularProgress,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Snackbar,
    TextField
} from "@mui/material";
import {getTable, editTelecommand, deleteTelecommand, getTCkind, getSent} from "../redux/databaseSlice";
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
import BarChartIcon from '@mui/icons-material/BarChart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import TreeItem, {treeItemClasses} from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import {styled} from '@mui/material/styles';
import {get, isEqual} from 'lodash';
import Fade from '@mui/material/Fade';
import CreateTC from "./CreateTC";
import Plot from "./Plot";
import StyledModal from "./StyledModal"

function Data(props) {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const table = useSelector(state => state.database.table)
    const tableError = useSelector(state => state.database.tableError)
    const loading = useSelector(state => state.database.loading)
    const editError = useSelector(state => state.database.editError)
    const editLoading = useSelector(state => state.database.editLoading)
    const deleteError = useSelector(state => state.database.deleteError)
    const deleteLoading = useSelector(state => state.database.deleteLoading)
    const tcKind = useSelector(state => state.database.tcKind)
    const sentIds = useSelector(state => state.database.sentIds)
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [open, setOpen] = useState()
    const treeKeys = useRef([])
    const [expanded, setExpanded] = useState([])
    const [editable, setEditable] = useState(null)
    const [modalOpened, setModalOpened] = useState(false)
    const [plotVars, setPlotVars] = useState([])
    const [tcToDelete, setTcToDelete] = useState(null)
    const [errorOpened, setErrorOpened] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const loadedRef = useRef(false)
    const {tm} = props

    useEffect(() => {
        if (auth.user) {
            dispatch(getTable({table: tm ? tm : 'tc', start: start ? Math.round(Date.parse(start)/1000) : start, end: end ? Math.round(Date.parse(end)/1000) : end}))
            if (!tm && !tcKind) {
                dispatch(getTCkind())
            }
            if (!tm) {
                dispatch(getSent())
            }
        }
    }, [auth.user])

    useEffect(() => {
        editable !== null && setEditable(null)
        tcToDelete !== null && setTcToDelete(null)
        modalOpened && setModalOpened(false)
    }, [table?.data])

    useEffect(() => {
        if (loadedRef.current && editable !== null && editError !== null) {
            showMessage(editError)
            loadedRef.current = false
        } else if (loadedRef.current && tcToDelete !== null && deleteError !== null) {
            showMessage(deleteError)
            loadedRef.current = false
        }
    }, [editError, deleteError])

    useEffect(() => {
        if (editLoading || deleteLoading) {
            loadedRef.current = true
        }
    }, [editLoading, deleteLoading])

    function showMessage(message) {
        setErrorMessage(message)
        setErrorOpened(true)
    }

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
        return d === null ? false : typeof d !== 'object' || d['data'] !== undefined || (d['iid'] && Object.keys(d).length === 1)
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
                paddingLeft: '1rem'
            }
        }
    }))

    function StyledTreeItem(props) {
        const {labelInfo, labelText, editing, onEdit, parents, ...other} = props

        return (
            <StyledTreeItemRoot
                onDoubleClick={(e) => {
                    e.stopPropagation()
                    if (tm && labelInfo !== null) {
                        setPlotVars(prevState => {
                            let index = prevState.findIndex(e => isEqual(e, parents))
                            if (index > -1) {
                                return prevState.filter((_, i) => i !== index)
                            } else {
                                if (prevState.length >= 4) {
                                    showMessage("Maximum number of data series is 4")
                                    return prevState
                                } else {
                                    return [...prevState, parents]
                                }
                            }
                        })
                    }
                }}
                label={
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <span>{labelText}</span>
                            {plotVars.some(e => isEqual(parents, e)) ? <BarChartIcon style={{marginLeft: '1.5rem'}} fontSize={'small'}/> : null}
                        </div>
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
            if (data[k] === null) {
                return null
            }
            const id = data.iid + parents.join('') + k
            if (typeof data[k] === 'object' && !treeKeys.current.includes(id)) {
                treeKeys.current.push(id)
            }
            const edit = editing && typeof data[k] !== 'object' && k === 'data'
            return(
                <StyledTreeItem key={id} nodeId={id} labelText={k} labelInfo={typeof data[k] !== 'object' ? data[k] : null} editing={edit} parents={parents.concat(k)}
                                onEdit={(value) => setEditable(prevState => {
                                    let p = parents.concat(k)
                                    let o = p.reduceRight((obj, elem) => ({[elem]: obj}), value)
                                    return {...prevState, ...o}
                                })} >
                    {typeof data[k] === 'object' ? renderTree(data[k], editing, parents.concat(k)) : null}
                </StyledTreeItem>
            )
        })
    }

    const header = () => {
        if (!table || !table.data) {
            return null
        }
        return (
            <div style={{display: 'flex', alignItems: 'center', padding: '0.5rem 1rem 1rem 1rem'}}>
                {table.data.length > 0 && Object.keys(table.data[0]).map(column => {
                    if (!column.includes('fk_') && isData(table.data[0][column])) {
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
                {!tm ?
                    <Button style={{position: 'absolute', right: '2rem'}} variant="contained"
                            onClick={() => {
                                setModalOpened(true)
                                editable !== null && setEditable(null)
                            }}>
                        <AddCircleIcon/>
                    </Button> : null}
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
                            {!tm && !sentIds.includes(row['iid']) ?
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    {editable !== null ? <Button onClick={() => setEditable(null)}>Cancel</Button> : null}
                                    {editable === null ?
                                        <Button variant="contained" color="error" onClick={() => setTcToDelete(row['iid'])}>
                                            <DeleteIcon/>
                                        </Button> : null}
                                    <Button style={{marginLeft: '1rem'}} variant="contained" startIcon={editable === null ? <EditIcon/> : editLoading ? null : <SaveIcon/>}
                                            onClick={() => {
                                                if (editable !== null) {
                                                    dispatch(editTelecommand(editable))
                                                } else {
                                                    setEditable(JSON.parse(JSON.stringify(row)))
                                                }
                                            }}>
                                        {editable === null ? 'Edit' : editLoading ? 'Loading' : 'Save'}
                                    </Button>
                                </div> : !tm ? <CloudDoneIcon fontSize="large" /> : null}
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

    const loaded = table && table.data && table.name === (tm ? tm : 'tc')
    const empty = loaded && table.data.length === 0

    return (
        <div className="container">
            {!loading ?
                <div style={{width: '100%', flex: 1, display: 'flex', flexDirection: 'column', marginTop: '2rem'}}>
                    {loaded ?
                        <Snackbar
                            open={errorOpened}
                            autoHideDuration={4000}
                            onClose={() => setErrorOpened(false)}
                            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                        >
                            <Alert severity="error" variant="filled">
                                {errorMessage}
                            </Alert>
                        </Snackbar> : null}
                    {loaded && !empty && tm ?
                        <StyledModal
                            open={modalOpened}
                            onClose={() => setModalOpened(false)}
                        >
                            <Plot plotVars={plotVars} modalOpened={modalOpened} data={[...table.data].reverse()} />
                        </StyledModal> : null}
                    {loaded && !tm && tcKind ?
                        <StyledModal
                            open={modalOpened}
                            onClose={() => setModalOpened(false)}
                        >
                            <CreateTC modalOpened={modalOpened} tcKind={tcKind} />
                        </StyledModal> : null}
                    {loaded && !empty && !tm ?
                        <Dialog open={tcToDelete !== null} onClose={() => setTcToDelete(null)}>
                            <DialogTitle>Delete telecommand</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    This will delete this telecommand permanently. You cannot undo this action
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setTcToDelete(null)}>Cancel</Button>
                                <Button color="error" variant="contained" onClick={() => dispatch(deleteTelecommand(tcToDelete))}>Delete</Button>
                            </DialogActions>
                        </Dialog> : null}
                    {tm ?
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                            <div style={{display: 'flex', flexDirection: 'row', margin: "0 2rem 1.5rem 2rem", gap: '1rem'}}>
                                <DateTimePicker
                                    label="Start"
                                    value={start}
                                    onChange={(v) => setStart(v)}
                                    views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
                                />
                                <DateTimePicker
                                    label="End"
                                    value={end}
                                    onChange={(v) => setEnd(v)}
                                    views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
                                />
                                <Button variant={'outlined'} onClick={() => auth.user && dispatch(getTable({table: tm ? tm : 'tc', start: start ? Math.round(Date.parse(start)/1000) : start, end: end ? Math.round(Date.parse(end)/1000) : end}))}>
                                    <RefreshRoundedIcon/>
                                </Button>
                                <Fade in={plotVars.length > 0}>
                                    <Button style={{marginLeft: 'auto'}} variant={'contained'} onClick={() => setModalOpened(true)}>
                                        <BarChartIcon/>
                                    </Button>
                                </Fade>
                            </div>
                        </LocalizationProvider> : null}
                    {loaded ?
                        <div style={{flex: 1, margin: "0 2rem 2rem 2rem", display: 'flex', flexDirection: 'column'}}>
                            {header()}
                            {empty ? <h4 className="emptyText">No data available</h4> :
                                <Virtuoso
                                    style={{flex: 1}}
                                    data={table.data}
                                    itemContent={rowContent}
                                />
                            }
                        </div> : <p className="errorText">{tableError}</p>}
                </div> : <CircularProgress/>}
        </div>
    );
}

export default Data;