export async function fetchProducts(family) {
  const response = await fetch(
    `http://localhost:3333/products?family=${family}`
  );
  return await response.json();
}
