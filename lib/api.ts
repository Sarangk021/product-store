export async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products; // Returns an array of products
  }
  