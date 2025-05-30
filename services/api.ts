//rtk query's API creation tools
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//interface for User data structure (detail screen data)
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}

export const apiSlice = createApi({
  reducerPath: 'api', //unique key: reducer state
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://jsonplaceholder.typicode.com' //base API URL
  }),
  //API endpoints
  endpoints: (builder) => ({
    //fetching users
    getUsers: builder.query<User[], void>({
      query: () => '/users', //endpoint path
    }),
  }),
});

//auto-generated hook to fetch users
export const { useGetUsersQuery } = apiSlice;