import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductsPage() {

const { data: products, error } = useSWR('/api/products', fetcher);

if (error) return <div> no products...</div>;
if (!products) {
    return <div>is loading...</div>;
  }

return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price} </p>
            <p>Currency: {product.currency}</p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}