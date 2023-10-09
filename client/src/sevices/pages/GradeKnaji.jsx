import React from 'react'
import { useLazyGetKanjiByGradeQuery} from "../sevices/kanji"
import Kanjisimple from '../componets/Kanjisimple'
import style from "./GradeKanji.module.css"
function GradeKnaji() {

   function handelGrade (e){
     console.log(e.target.value)
     trigger(e.target.value)
    console.log(data)
    }
    const [trigger,{data, error, isLoading,}] =useLazyGetKanjiByGradeQuery();
   
  return (
    <div className={style.page}>
        <h3>selec grade kanji list :</h3>
      <div >
        <select className={style.select}  name="grade" onChange={handelGrade}>

          <option disabled selected="true">Selecciona un lenguaje</option>

          <option name ="1"value ="1">1</option>

          <option name ="2"value ="2">2</option>

          <option name ="3"value ="3">3</option>
          
          <option name ="4"value ="4">4</option>

          <option name ="5"value ="5">5</option>

          <option name ="6"value ="6">6</option>

        </select>
      </div>
        <div className={style.container}>
        {data ? data.map((e) => <Kanjisimple kanji={e.kanji}/>) :null}
        </div>
      </div>
  )
}

export default GradeKnaji