import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostAuLoginMutation } from '../sevices/kanji'
import  style  from './LoginPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../features/findone/authSlice.js';
function LoginPage() {
  const navigate = useNavigate();
  const dispatch =useDispatch()
  const { register, handleSubmit } = useForm()
  const [loginUser,{data,error}]=usePostAuLoginMutation()
  let onSubmit = handleSubmit(async (values) => {
      try {
        const res = await loginUser(values).unwrap()
        console.log(res)
        dispatch(setToken(res))
        navigate("/")
      } catch (error) {
        console.log(error)
      }
  });

  return (
    <div className={style.container}>
      <samp className={style.spam}>login</samp>
      <form className={style.furmu} onSubmit={onSubmit}>
        <input placeholder='email' className={style.inputR} type='email'
          {...register('email', { required: true })}
        ></input>
        <input placeholder='password' className={style.inputR} type='passware'
          {...register('password', { required: true })}
        ></input>
        <button user-select='none' className={style.button} type='submit'>Login</button>
        {data ? (data.message ? (<span className={style.error}>{data.message}</span>) : null) : null}
      </form>
    </div>
  )
}

export default LoginPage