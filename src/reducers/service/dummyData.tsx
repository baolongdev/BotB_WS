import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => "/products"
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`
        }),
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: `/products/add`,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct)
            })
        }),
        updateProduct: builder.mutation({
            query: ({ id, updateProduct }) => ({
                url: `/products/${id}`,
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updateProduct)
            })
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            })
        })
    })
})
// 'use+Query'
// 'use${}Query'
// 'use${GetAllProduct}Query'
export const { useGetAllProductQuery, useGetProductByIdQuery, useAddNewProductMutation } = productsApi;