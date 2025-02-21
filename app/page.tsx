export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome to My Shop</h1>
      <p className="text-gray-600">Browse our amazing products!</p>
      <a href="/products" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View Products</a>
    </div>
  );
}
