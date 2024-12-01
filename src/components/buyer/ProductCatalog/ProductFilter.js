import React from 'react';

const ProductFilter = () => {
  return (
    <div>
      <label>
        Filter by Grade:
        <select>
          <option value="A">Grade A</option>
          <option value="B">Grade B</option>
        </select>
      </label>
    </div>
  );
};

export default ProductFilter;
