import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { newsApi } from 'services/newsApi'

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    newsApi.middleware,
  ]    
})

setupListeners(store.dispatch)