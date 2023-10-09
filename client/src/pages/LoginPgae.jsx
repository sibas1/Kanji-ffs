import React from 'react'
import { useGetKanjiQuery } from '../sevices/kanji'
function LoginPgae() {
  const { data } = useGetKanjiQuery("⽷")

  return (
    <div>
      
    </div>
  )
}

export default LoginPgae