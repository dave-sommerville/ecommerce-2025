// src/Components/ProductList.jsx
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import FilterBar from '../Controls/FilterBar';
import { fetchProducts, fetchCategories } from '../Controls/api';
import { useProductContext } from '../Controls/ProductContext';

export default function ProductList() {
  const { search, category, categories, setCategories, setCategory } = useProductContext();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, [setCategories]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts({ search, category, skip: page * limit, limit });
      setProducts(data.products);
    };
    loadData();
  }, [search, category, page]);

  return (
    <div className="product-display blur-bg">
      <FilterBar 
        categories={categories} 
        onFilter={setCategory} 
        selectedCategory={category}
      />
      <div className="product-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      <div className="pagination">
        <button className="btn" onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0}>Prev</button>
        <button className="btn" onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}