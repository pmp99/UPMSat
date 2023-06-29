import React, {useEffect, useRef, useState} from "react";
import {get, merge} from "lodash";

function StreamingData(props) {
    const hk = useRef({})
    const sc = useRef({})
    const [update, setUpdate] = useState(false)
    const {enums} = props

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
    )
}

export default StreamingData;