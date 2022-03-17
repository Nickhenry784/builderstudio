import React from 'react';
import cost from './data/cost';

export default function CostItem() {
  return (
    <div>
      {cost.map((item, index) => (
        <div
          className="container mx-auto py-4 border-b flex items-center justify-between pr-6 hover:bg-gray-100"
          key={item.id}
        >
          <div className="px-6">{item.name}</div>
          <input type="checkbox" className="" />
        </div>
      ))}
    </div>
  );
}
