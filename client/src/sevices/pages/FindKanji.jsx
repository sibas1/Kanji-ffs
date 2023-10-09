import React, { useState } from 'react'
import style from "./FindKanji.module.css"
import KanjiFindC from "../componets/KanjiFindC";
import KanjiFindM from '../componets/KanjiFindM';
import KanjiFindO from '../componets/KanjiFindO';
import KanjiFindK from '../componets/KanjiFindK';




function FindKanji() {
  
  const [kanji, setKanji] = useState([]);

  
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
            <label className={style.label}>find kaji: <input className={style.inputfind} name="kanji" type="text" /></label><br />
            <button className={style.button} type='submit'>buscar</button>
          </form>
        </div>
        <div className={style.containerz}>
          {(kanji.map((e) => <KanjiFindC kanji={e} />))}
          {(kanji.map((e) => <KanjiFindM kanji={e} />))}
          {(kanji.map((e) => <KanjiFindK kanji={e} />))}
          {(kanji.map((e) => <KanjiFindO kanji={e} />))}
        </div>
      </div>
    </>


  )
}
export default FindKanji