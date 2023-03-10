import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2' }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => `/top-headlines?country=ua&apiKey=f5f5e1cf1e514f048270127762dd4c6a`,
    }),
  }),
})

export const { useGetNewsQuery } = newsApi