export default function FilterBar({ categories, onFilter }) {
  return (
    <div>
      {/* <label>Filter by Category: </label> */}
      <select className="filter-menu" onChange={e => onFilter(e.target.value)}>
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
