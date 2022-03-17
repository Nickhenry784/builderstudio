import React from 'react';
import CategoryItem from './CategoryItems';
import CostItem from './CostItem';

export default function LeftNav() {
  return (
    <div className="">
      <div className="relative container mx-auto px-6 border-b h-32">
        <div className="text-xs absolute bottom-4 align-bottom font-bold">
          Filter by category
        </div>
      </div>
      <CategoryItem />
      <div className="relative container mx-auto px-6 border-b h-24">
        <div className="text-xs absolute bottom-6 align-bottom font-bold">
          Filter by cost
        </div>
      </div>
      <CostItem />
      <div className="container mx-auto px-6 border-b h-16" />
    </div>
  );
}
