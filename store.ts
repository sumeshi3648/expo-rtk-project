import { configureStore } from '@reduxjs/toolkit'; //functions from redux toolkit
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './services/api';

//create the redux store
export const store = configureStore({
  reducer: {
    //add API slice reducer to allow rtk query to manage the state of store
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    //default middleware  => add api slices for caching, loadoing, auto refetching and errir handling
    getDefaultMiddleware().concat(apiSlice.middleware),
});


//i decided to add listeners for refetcyhing for better user experience
setupListeners(store.dispatch);

//complete state tree of the app (typescript typr safety)
export type RootState = ReturnType<typeof store.getState>;

//dispatch function with right type information
export type AppDispatch = typeof store.dispatch;