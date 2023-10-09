import React, { useState } from 'react'
import { useGetKanjiSQuery ,useLazyGetKanjiMQuery} from "../sevices/kanji"
import Spinner from 'react-bootstrap/Spinner';
import style from './KanjiFindC.module.css';
import { useSelector } from 'react-redux';
import Kanjidetail from './Kanjidetail';


function KanjiFindC(props) {
    const [ver, setVer] = useState(false)
    const [kr, setKr] = useState([])
    function handel() {
        if (ver) {
            setVer(false)
        } else { setVer(true) }
    }
    const { data, error, isLoading, isUninitialized } = useGetKanjiSQuery(props.kanji)
    console.log(data,"s")
    //setVer(data)
    console.log(data,"ver")
    return (
        <div >
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

export default KanjiFindC