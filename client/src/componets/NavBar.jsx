import React from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className={style.nav}>
          <Link to='/' className={style.title}>Kanjis</Link>
        <ul>
              <li><Link to='/kanjifind' className={style.links}>Find Kanjis</Link> </li>
            <li> <Link to='/kanjigrade' className={style.links} > Kanji Grade</Link></li>
            <li> <Link to='/partica' className={style.links} > Partice</Link></li>
            <li> <Link to='/about' className={style.links} > About</Link></li>
           
        </ul>
    </div>
  )
}

export default NavBar