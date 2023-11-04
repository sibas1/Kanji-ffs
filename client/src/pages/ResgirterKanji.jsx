import React from 'react'
import { useForm } from "react-hook-form";
import { usePostAuRegisterMutation } from '../sevices/kanji';
import style from './ResgiterKanji.module.css'

function ResgirterKanji() {
    const [sendRegister,{error,isLoading,data}]=usePostAuRegisterMutation()
    const {register,handleSubmit, formState :{erros}} = useForm()
  return (
  <div user-select="none" className={style.container}>
    <span className={style.spam}>Registro de usuarios</span>
      <form className={style.furmu} onSubmit={handleSubmit((values) => {sendRegister(values),console.log(data)}) }>
      <input placeholder='username' className={style.inputR} type='username'
              {...register('username', { required: true })}
      ></input>
      <input placeholder='email' className={style.inputR} type='email'
          {...register('email', { required: true })}
      ></input>
      <input placeholder='password' className={style.inputR} type='passware'
              {...register('password', { required: true })}
      ></input>
      <button user-select='none' className={style.button} type='submit'>Register</button>
        {data ? (data.message ?(<span className={style.error}>{data.message}</span>):null):null}
      </form>

  </div>
     )
}

export default ResgirterKanji