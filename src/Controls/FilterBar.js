// src/Controls/FilterBar.jsx
export default function FilterBar({ categories, onFilter, selectedCategory }) {
  return (
    <div>
      <select 
        className="filter-menu" 
        onChange={e => onFilter(e.target.value)}
        value={selectedCategory || ""}
      >
        <option value="">All</option>
        {categories.map(cat => (
          <option key={cat.slug} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}