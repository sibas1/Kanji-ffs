import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const kanjiAPi = createApi({
    reducerPath : 'kanjiApi',
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:4000'}),
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
    })
})
export const { useGetKanjiKQuery, useGetKanjiOQuery, useGetKanjiMQuery,useLazyGetKanjiByGradeQuery, useGetKanjiQuery, useGetKanjiSQuery, useLazyGetKanjiQuery, useLazyGetKanjiMQuery } = kanjiAPi