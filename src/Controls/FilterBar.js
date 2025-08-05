export default function FilterBar({ categories, onFilter }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <label>Filter by Category: </label>
      <select onChange={e => onFilter(e.target.value)}>
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
