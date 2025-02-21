import { useEffect, useState } from 'react';
import { fetchProducts } from '../lib/api';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="border p-2 rounded-lg shadow block">
            <img src={product.thumbnail} alt={product.title} className="w-full h-24 object-cover rounded" />
            <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
