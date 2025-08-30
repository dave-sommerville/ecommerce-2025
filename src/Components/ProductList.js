// src/Components/ProductList.jsx

import { useEffect, useState } from 'react'; 
import ProductCard from './ProductCard'; 
import { fetchProducts } from '../Controls/api';

export default function ProductList({ initialCategory = '', initialSearch = '', sales = false, sectionTitle }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts({ search: initialSearch, category: initialCategory, skip: page * limit, limit });
      setProducts(data.products);
    };
    loadData();
  }, [initialSearch, initialCategory, page]);

  return (
    <div className="product-display blur-bg">
      <h2>{sectionTitle}</h2>
      <div className="product-grid">
        {products.map(p => <ProductCard key={p.id} product={p} isSale={sales} />)}
      </div>
      <div className="pagination">
        <button className="btn" onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0}>Prev</button>
        <button className="btn" onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}