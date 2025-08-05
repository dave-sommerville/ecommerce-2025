import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import FilterBar from '../Controls/FilterBar';
import { fetchProducts, fetchCategories } from '../Controls/api';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 10;
useEffect(() => {
  fetchCategories().then((data) => {
    console.log("Fetched categories:", data); // Inspect this
    setCategories(data);
  });
}, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts({ search, category, skip: page * limit, limit });
      setProducts(data.products);
    };
    loadData();
  }, [search, category, page]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div>
      <SearchBar onSearch={setSearch} />
      <FilterBar categories={categories} onFilter={setCategory} />
      <div className="product-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0}>Prev</button>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}
