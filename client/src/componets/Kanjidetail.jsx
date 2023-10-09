import React from 'react'
import { useGetKanjiQuery } from '../sevices/kanji'
import style from "./Kanjidetail.module.css"
import Spinner from 'react-bootstrap/Spinner';

function Kanjidetail(props) {
    const { data, isLoading } = useGetKanjiQuery(props.kanji)


    console.log(data)
  return (
      <div className={style.continerIK}>
          {isLoading ? (
          <Spinner animation="grow" />
          ) : data ? (
            <>
             <input type='checkbox' checked id={style.evento}></input>
            <div className={style.continerI} ><video className={style.kanji} src={data.kanji.video.mp4} autoplay="autoplay"  muted ></video></div>
          <div className={style.infok}>
              <h3><p>kunyomi :</p>{data.kanji.kunyomi.hiragana}<p>onyomi :</p>{data.kanji.onyomi.katakana}</h3>
              <h3><p>meaning :</p>{data.kanji.meaning.english}</h3>
              <h3><p>examples :</p></h3>
              <h3>{data.examples[0].japanese}</h3>
              <audio className={style.audio} src={data.examples[0].audio.mp3} controls  preload="metadata" />
              <h3><p>radcal :</p>{data.radical.character}</h3>
              <h3><p>radical :</p>{data.radical.meaning.english}</h3>
          </div>
            </>
                       
            ) : null}
   
         
    </div>
  )
}

export default Kanjidetail