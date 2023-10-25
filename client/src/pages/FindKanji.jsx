import React, { useState } from 'react'
import style from "./FindKanji.module.css"
import KanjiFindC from "../componets/KanjiFindC";
import KanjiFindM from '../componets/KanjiFindM';
import KanjiFindO from '../componets/KanjiFindO';
import KanjiFindK from '../componets/KanjiFindK';
import NavBar from '../componets/NavBar';




function FindKanji() {
  
  const [kanji, setKanji] = useState([]);

  function ahndelIntro  (e) {
    if (e.code =="Enter"){
      if ((e.target.elements.kanji.value != "") && (isNaN(e.target.elements.kanji.value))) {
        setKanji([
          ...kanji,
          e.target.elements.kanji.value])
      } 
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if ((e.target.elements.kanji.value != "") && (isNaN(e.target.elements.kanji.value))) {
       setKanji([
      ...kanji,
      e.target.elements.kanji.value])
    } 
  }
  
  return (
    <>
      <div className={style.page}>
        <div className={style.kanjiF}>
          <form onSubmit={handleSubmit}>
            <label className={style.label}>find kanji: <input onKeyDown={ahndelIntro} className={style.inputfind} name="kanji" type="text" /></label><br />
            <button className={style.button} type='submit'>buscar</button>
          </form>
        </div>
        <div className={style.containerz}>
          {(kanji.map((e) => <>
          <KanjiFindC kanji={e} />
          <KanjiFindM kanji={e} />
          <KanjiFindK kanji={e} />
          <KanjiFindO kanji={e} />
          </>))}
        </div>
      </div>
    </>


  )
}
export default FindKanji