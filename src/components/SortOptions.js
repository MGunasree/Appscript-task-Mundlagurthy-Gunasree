import React, { useState } from 'react';

const SortOptions = () => {
  const [sortOptions] = useState([
    { value: 'recommended', label: 'RECOMMENDED' },
    { value: 'newest', label: 'NEWEST FIRST' },
    { value: 'popular', label: 'POPULAR' },
    { value: 'price_high_to_low', label: 'PRICE : HIGH TO LOW' },
    { value: 'price_low_to_high', label: 'PRICE : LOW TO HIGH' },
  ]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', padding: '10px' }}>
      <h4 style={{ margin: 0 }}>
        <span style={{ fontWeight: 'bold', marginLeft: '80px' }}>3425 items</span>
      </h4>
      <select>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortOptions;
