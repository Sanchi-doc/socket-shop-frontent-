import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
    reducerPath: "products",
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
    tagTypes: ['products'],
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => ({
                method: 'GET',
                url: `/api/products/categories`
            }),
            providesTags: ['products']
        }),
        getMenProducts: builder.query({
            query: () => ({
                method: 'GET',
                url: `https://fakestoreapi.com/products`
            }),
            transformResponse: (response) => {
                const mensProduct = response.filter(({category}) => category === "men's clothing")
                return mensProduct
            },
            providesTags: ['products']
        }),
        getJeweleryProduct: builder.query({
            query: () => ({
                method: "GET",
                url: `https://fakestoreapi.com/products`
            }),
            transformResponse: (response) => {
                const jeweleryProduct = response.filter(({category}) => category === "jewelery")
                return jeweleryProduct
            }
        }),
        getWemanProduct: builder.query({
            query: () => ({
                method: "GET",
                url: `https://fakestoreapi.com/products`
            }),
            transformResponse: (response) => {
                const wemanProduct = response.filter(({category}) => category === "women's clothing")
                return wemanProduct
            }
        }),
        getElectronicsProduct: builder.query({
            query: () => ({
                method: "GET",
                url: `https://fakestoreapi.com/products`
            }),
            transformResponse: (response) => {
                const electronicsProduct = response.filter(({category}) => category === "electronics")
                return electronicsProduct
            }
        }),
        getSingleProduct: builder.query({
            query: (id) => ({
                method: "GET",
                url: `https://fakestoreapi.com/products/${id}`
            }),
            providesTags: ['products']
        }),
        getProductsCategory: builder.query({
            query: (category) => ({
                method: "GET",
                url: `https://fakestoreapi.com/products/category/${category}`
            }),
            providesTags: ['products']
        })
    })
})
export const { useGetCategoriesQuery, useGetMenProductsQuery, useGetJeweleryProductQuery, useGetWemanProductQuery, useGetElectronicsProductQuery, useGetSingleProductQuery, useGetProductsCategoryQuery } = productsApi
