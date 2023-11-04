import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useDispatch } from 'react-redux';

export const kanjiAPi = createApi({
    reducerPath : 'kanjiApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl:'http://localhost:4000',
        credentials: 'include'
    }),
    endpoints: (builder) =>({
        getKanji : builder.query({
            query: (kanji) =>  `/kanjiD?kanji=${kanji}`,
        }),
        getKanjiByGrade: builder.query({
            query: (kaji) => `/kanjiG?grade=${kaji}`,
        }),
        getKanjiS: builder.query({
            query: (kaji) => `/kanji?kanji=${kaji}`,
        }),
        getKanjiM: builder.query({
            query: (kaji) => `/meaning?kem=${kaji}`,
        }),
        getKanjiO: builder.query({
            query: (kaji) => `/kanjiO?kanji=${kaji}`,
        }),
        getKanjiK: builder.query({
            query: (kaji) => `/kanjiK?kanji=${kaji}`,
        }),
        postAuRegister : builder.mutation({
            query :(user) =>({
                url : "/api/register",
                method : "Post",
                body : user,
            })
        }),
        postAuLogin: builder.mutation({
             query: (user) => ({
                 url: "/api/login",
                 method: "Post",
                 body: user,
            }),    
         })
    })
})
export const {usePostAuLoginMutation,usePostAuRegisterMutation, useGetKanjiKQuery, useGetKanjiOQuery, useGetKanjiMQuery,useLazyGetKanjiByGradeQuery, useGetKanjiQuery, useGetKanjiSQuery, useLazyGetKanjiQuery, useLazyGetKanjiMQuery } = kanjiAPi