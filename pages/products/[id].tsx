import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCartStore } from '../../store/cartStore'; // Import Zustand store

type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
};

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query; // Getting product ID
  const [product, setProduct] = useState<Product | null>(null);

  const { quantity, increase, decrease } = useCartStore();

  useEffect(() => {
    if (!id) return;
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4">
      <button onClick={() => router.back()} className="mb-4 text-blue-500">
        ← Back
      </button>
      <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
      <h1 className="text-xl font-bold mt-2">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>

      <div className="mt-4 flex items-center">
        <button onClick={decrease} className="px-3 py-1 bg-gray-200 rounded-l">
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button onClick={increase} className="px-3 py-1 bg-gray-200 rounded-r">
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => alert(`Added ${quantity} ${product.title} to cart!`)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
