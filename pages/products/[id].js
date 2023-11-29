import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductDetailsPage() {

  const router = useRouter();
  const { id } = router.query;

  const { data: product, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div> no product...</div>;
  if (!product) {
    return <div> is loading...</div>;
  }

  return (
    <>
      <h1>Product Details</h1>
      
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price} </p>
        <p>Currency: {product.currency}</p>
        <p>Category: {product.category}</p>
    </>
  );
}
