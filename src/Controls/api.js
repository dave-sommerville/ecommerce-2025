const BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async ({ limit = 10, skip = 0, search = '', category = '' }) => {
  let url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;
  if (search) url = `${BASE_URL}/products/search?q=${search}&limit=${limit}&skip=${skip}`;
  if (category) url = `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`;
  
  const res = await fetch(url);
  return await res.json();
};

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return await res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return await res.json();
};
