import React, { useState } from 'react'
import style from "./Kanjisimple.module.css"
import { useLazyGetKanjiQuery, useGetKanjiQuery } from '../sevices/kanji'
function Kanjisimple(props) {
  const [ver, setVer] = useState(false)
  const[ tt,{ data, error, isLoading, isUninitialized }] = useLazyGetKanjiQuery()
  function handeldetalle(e) {
    console.log(e.target.outerText)
    tt(e.target.outerText)
    console.log(data)
    if (ver) {
      setVer(false)
    } else { setVer(true) }
  }
  return (
    <div className={style.conteiner2}>
      <div onClick={handeldetalle} className={style.conteiner}>
        <h1>{props.kanji.character}</h1>
      </div>
      <input type='checkbox' checked={ver} id={style.evento}></input>
      {data ? (<div className={style.desplegable} >
        <h3> hiragana :{data.kanji.kunyomi.hiragana} romaji :{data.kanji.kunyomi.romaji}</h3>
        <h3>meaning: {data.kanji.meaning.english}</h3>
        <h3>examples :</h3>
        <h3>{data.examples[0].japanese}</h3>
        <audio className={style.audio} src={data.examples[0].audio.mp3} controls preload="metadata" />
        <h3>radcal :{data.radical.character}</h3>
        <h3>radical: {data.radical.meaning.english}</h3>
      </div>) : null}
    </div>
  )
}

export default Kanjisimple