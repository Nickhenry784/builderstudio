import React from 'react';
import category from './data/category';

export default function CategoryItem() {
  return (
    <ul>
      {category.map((item, index) => (
        <div
          key={item.id}
          className="container mx-auto py-4 border-b flex items-center justify-between pr-6 hover:bg-gray-100"
        >
          <div className="px-6">{item.name}</div>
          <input type="checkbox" className="" />
        </div>
      ))}
    </ul>
  );
}
