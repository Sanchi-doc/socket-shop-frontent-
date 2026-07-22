import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4001',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token
            if(token) {
                headers.set('authorization', `Bearer ${token}`)
            } else {
                headers.delete('authorization')
            }
            return headers
        }
    }),
    tagTypes: ['user'],
    endpoints: builder => ({
        getUser: builder.query({
            query: () => ({
                method: "GET",
                url: `/api/user/info`
            }),
            providesTags: ['user']
        }),
        updateUser: builder.mutation({
            query: (body) => ({
                method: "PATCH",
                url: `/api/user/info/update`,
                body
            }),
            invalidatesTags: ['user']
        })
    })
})
export const { useGetUserQuery, useUpdateUserMutation } = userApi