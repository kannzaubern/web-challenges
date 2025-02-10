import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AllListingsPage() {
  const { data, isLoading } = useSWR("/api/products", fetcher);

  console.log("Fetched data:", data);

  if (!data) return <p>No products found</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul style={{ listStyle: "none", padding: "0", margin: "15px" }}>
      {data.map((product) => (
        <li key={product.id} style={{ marginBottom: "40px" }}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
          <p>Description: {product.description} </p>
          <p>
            Price: {product.price} {product.currency}
          </p>
          <p>{product.category}</p>
        </li>
      ))}
    </ul>
  );
}
