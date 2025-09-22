
const CategoryFilter = ({ tasks, setFilter }) => {
  const uniqueCategories = ['All', ...new Set(tasks.map((t) => t.category))];

  return (
    <div>
      <label>Filter by category: </label>
      <select onChange={(e) => setFilter(e.target.value)}>
        {uniqueCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
