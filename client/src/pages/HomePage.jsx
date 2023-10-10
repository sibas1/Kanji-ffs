import React from 'react'
import style from './HomePage.module.css'


function HomePage() {

  return (<><h1 className={style.h1}>Kanji FFS</h1>
    <div className={style.cotainer}>
      <div className={style.elemento}>
      <h3 className={style.h3}>Estatus:</h3>
      <p className={style.p}>en desarrollo ...</p>
      </div>
      <div className={style.elemento}>
        <h3 className={style.h3}>Funciones</h3>
      <h5 className={style.h5}>activas</h5>
      <p>Busqueda de kanjis por :</p>
      <ol>
        <li>Significado</li>
        <li>Carater</li>
        <li>Oyomni</li>
        <li>Kunyomi</li>
        <li>Lista de kanjis por grado (cada uno con detalle)</li>
      </ol>
      <h5 className={style.h5} >En progreso:</h5>
      <ol>
        <li>Partica de kanjis</li>
        <li>Dicionario personal</li>
        <li>Partica con kanjis en favoritos</li>
        <li>funciones de de usuarios</li>
      </ol>
      </div>
    </div></>
  )
}

export default HomePage