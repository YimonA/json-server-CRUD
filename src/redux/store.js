import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { BlogApi } from './BlogApi'

export const store = configureStore({
  reducer: {
    [BlogApi.reducerPath]: BlogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BlogApi.middleware),
})

setupListeners(store.dispatch)