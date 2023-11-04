import React from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearToken } from '../features/findone/authSlice.js'

function NavBar() {
  const dispatch = useDispatch()
  const name = useSelector((state) => state.auth.token)
  console.log( name)
  return (
    <div className={style.nav}>
      <Link to='/' className={style.title}>Kanji FFS</Link>
        <ul className={style.ul}>
              <li><Link to='/kanjifind' className={style.links}>Find Kanjis</Link> </li>
            <li> <Link to='/kanjigrade' className={style.links} > Kanji Grade</Link></li>
            <li> <Link to='/partica' className={style.links} > Partice</Link></li>
        {name ? (<><li> <Link to='/about' className={style.links} > {name.name}</Link></li>
          <li><Link onClick={()=>{dispatch(clearToken())}} to='/' className={style.links} > Salir</Link></li></>):(<li> <Link to='/login' className={style.links} > Logear</Link></li>)}
        </ul>
    </div>
  )
}

export default NavBar