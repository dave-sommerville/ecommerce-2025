// src/Pages/ProductsPage.jsx

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import FilterBar from '../Controls/FilterBar';
import { useProductContext } from '../Controls/ProductContext';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories, setCategory } = useProductContext();

  const currentSearch = searchParams.get('search') || '';
  const currentCategory = searchParams.get('category') || '';

  const handleFilterChange = (catSlug) => {
    setCategory(catSlug);
    setSearchParams({ ...Object.fromEntries(searchParams.entries()), category: catSlug });
  };

  return (
    <div className="products-page">
      <FilterBar 
        categories={categories} 
        onFilter={handleFilterChange} 
        selectedCategory={currentCategory} 
      />
      <h2>Products</h2>
      <ProductList initialSearch={currentSearch} initialCategory={currentCategory} />
    </div>
  );
}