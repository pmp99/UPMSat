import React, {useState} from 'react';
import {get} from "lodash";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ReferenceArea,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import Fade from "@mui/material/Fade";
import {Button} from "@mui/material";
import ZoomOutIcon from '@mui/icons-material/ZoomOut';


const colors = ['#0088FE', '#147922', '#FFBB28', '#FF8042']
const zoomInitialState = {
    left: 'dataMin',
    right: 'dataMax',
    refAreaLeft: null,
    refAreaRight: null,
    top: 'dataMax',
    bottom: 'dataMin'
}
function Plot(props) {
    const {data, plotVars, modalOpened} = props
    const [zoomState, setZoomState] = useState(zoomInitialState)
    const [slicedData, setSlicedData] = useState(data)

    const getAxisYDomain = (from, to) => {
        const refData = data.slice(from, to)
        setSlicedData(refData)
        let [bottom, top] = [null, null]
        refData.forEach(d => {
            plotVars.forEach(v => {
                let value = get(d, v)
                if (bottom === null || value < bottom) {
                    bottom = value
                }
                if (top === null || value > top) {
                    top = value
                }
            })
        })
        return [(bottom | 0), (top | 0)]
    }

    const zoom = () => {
        let {refAreaLeft, refAreaRight} = zoomState
        if (refAreaLeft === refAreaRight || refAreaRight === null) {
            setZoomState(prevState => ({...prevState, refAreaLeft: null, refAreaRight: null}))
            if (slicedData.length !== data.length) {
                setSlicedData([...data])
            }
            return
        }
        if (refAreaLeft > refAreaRight) {
            [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft]
        }
        const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight+1)
        setZoomState(prevState => ({...prevState, refAreaLeft: null, refAreaRight: null, left: slicedData[refAreaLeft]['timestamp_secs']['data'], right: slicedData[refAreaRight]['timestamp_secs']['data'], bottom, top}))
    }

    const zoomOut = () => {
        setZoomState(zoomInitialState)
        if (slicedData.length !== data.length) {
            setSlicedData([...data])
        }
    }

    const startDate = new Date(1000*slicedData[0]['timestamp_secs']['data'])
    const endDate = new Date(1000*slicedData[slicedData.length-1]['timestamp_secs']['data'])
    const differentYear = startDate.getFullYear() !== endDate.getFullYear()
    const differentMonth = differentYear ? true : startDate.getMonth() !== endDate.getMonth()
    const differentDay = differentMonth ? true : startDate.getDay() !== endDate.getDay()
    const dateTimeOptions = {
        year: differentYear ? "2-digit" : undefined,
        month: differentMonth ? "2-digit" : undefined,
        day: differentDay ? "numeric" : undefined,
        hour: differentMonth ? undefined : 'numeric',
        minute: differentMonth ? undefined : 'numeric',
        second: differentDay ? undefined : 'numeric'
    }

    return(
        <Fade in={plotVars.length > 0 && modalOpened}>
            <div style={{position: 'absolute', top: '10%', left: '6%', bottom: '10%', right: '6%', borderRadius: '1rem',
                padding: '2rem', backgroundColor: 'white', boxShadow: '0px 2px 24px #383838'}}>
                <Fade in={slicedData.length !== data.length}>
                    <Button style={{position: 'absolute', right: '1rem', top: '1rem', zIndex: 10}} variant={'contained'} onClick={zoomOut}>
                        <ZoomOutIcon/>
                    </Button>
                </Fade>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={slicedData.map(e => plotVars.reduce((acc, cur) => ({...acc, [cur.join(' -> ')]: get(e, cur)}), {x: e['timestamp_secs']['data']} ))}
                        margin={{top: 10, right: 30, left: 20, bottom: 5}}
                        onMouseDown={e => setZoomState(prevState => ({...prevState, refAreaLeft: e?.activeTooltipIndex}))}
                        onMouseMove={e => zoomState.refAreaLeft && setZoomState(prevState => ({...prevState, refAreaRight: e?.activeTooltipIndex}))}
                        onMouseUp={zoom}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis allowDataOverflow dataKey="x" domain={[zoomState.left, zoomState.right]} tickFormatter={(v) => new Intl.DateTimeFormat('es-ES', dateTimeOptions).format(1000*v)}/>
                        <YAxis allowDataOverflow domain={[zoomState.bottom, zoomState.top]} />
                        <Tooltip />
                        <Legend />
                        {plotVars.map((e, i) => <Line key={e} type="linear" dataKey={e.join(' -> ')} stroke={colors[i]} strokeWidth={2} animationDuration={300} />)}
                        {zoomState.refAreaLeft !== null && zoomState.refAreaRight !== null ?
                            <ReferenceArea x1={slicedData[zoomState.refAreaLeft]['timestamp_secs']['data']} x2={slicedData[zoomState.refAreaRight]['timestamp_secs']['data']} strokeOpacity={0.3} />
                            : null}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Fade>
    )
}

export default Plot;