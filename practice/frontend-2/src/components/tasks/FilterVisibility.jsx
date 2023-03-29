function FilterVisibility({ visibility, handleChangeVisibility }) {
  return (
    <select value={visibility} onChange={handleChangeVisibility}>
      <option value='all'>All</option>
      <option value='running'>Running</option>
      <option value='completed'>Completed</option>
    </select>
  );
}

export default FilterVisibility;
