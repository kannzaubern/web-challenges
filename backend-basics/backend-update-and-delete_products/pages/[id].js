import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";
import Button from "@/components/Button";

export default function Product() {
  const [isEditMode, setEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
      setEditMode(false);
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log("Error:", response.status);
    } else {
      router.push("/");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <button type="button" onClick={() => setEditMode(!isEditMode)}>
        {isEditMode ? "Cancel Edit" : "Edit Product"}
      </button>{" "}
      <button type="button" onClick={() => handleDeleteProduct(id)}>
        Delete
      </button>
      <ProductCard>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
        <StyledLink href="/">Back to all</StyledLink>
      </ProductCard>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          isEditMode={isEditMode}
          product={data}
        />
      )}
    </>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
