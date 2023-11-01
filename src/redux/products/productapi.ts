import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image :string
};

export const productApi = createApi({
  reducerPath: "productApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], null>({ // Use "getProducts" instead of "getproducts"
      query: () => "products",
    }),
    getProductById: builder.query<Product, { id: string }>({
      query: ({ id }) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
