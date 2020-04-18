import React, { useState, useEffect } from 'react';
import FilterResults from 'react-filter-search';

const FilterSearch = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  async function fetchData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    result.json().then(result => setData(result));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <FilterResults
        value={value}
        data={data}
        renderResults={results => (
          <div>
            {results.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default FilterSearch;
