import React, { useState } from 'react'
import { useGetKanjiOQuery } from "../sevices/kanji"
import Spinner from 'react-bootstrap/Spinner';
import style from './KanjiFindC.module.css';
import Kanjidetail from './Kanjidetail';


function KanjiFindO(props) {
    const [ver, setVer] = useState(false)
    const [kr, setKr] = useState([])
    function handel() {
        if (ver) {
            setVer(false)
        } else { setVer(true) }
    }
    const { data, error, isLoading, isUninitialized } = useGetKanjiOQuery(props.kanji)
    //setVer(data)
    console.log(data, "O")
    return (
        <div className={style.containerIK}>
            {(error) ? (
                <h1>error</h1>
            ) : isLoading ? (
                <Spinner animation="grow" />
                ) : data ? ((data.length != 0) ? <div><h3 className={style.titulo}>{props.kanji}</h3>
                    <div className={style.box1}>
                        {data.map(x => (<Kanjidetail kanji={x.kanji.character} />))}</div>
                </div> : null
            ) : null}
        </div>
    )
}

export default KanjiFindO