"use client";

import { useGetProductsQuery } from "@/redux/products/productapi";
import React from 'react'; // Import React
import Image from "next/image";

const page = () => {
    const { isLoading, isFetching, data, error } = useGetProductsQuery(null);

    return (
      <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
       
        {error ? (
          <p>Oh no, there was an error</p>
        ) : isLoading || isFetching ? (
          <p>Loading...</p>
        ) : data ? (
          <div
          >
            {data.map((product) => (
              <div
                key={product.id}
              >
                <h3>{product.title}</h3>
                <p>{product.description}</p>
               
                <Image
      src={product.image}
      alt="Picture of the author"
      width={500}
      height={500}
	 
    />
              </div>
            ))}
          </div>
        ) : null}
      </main>
)}

export default page