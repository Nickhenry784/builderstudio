import React from 'react';
import CurrentDropdown from './CurrentDropdown';
import SupportDropDown from './SupportDropDown';

export default function RightHeader() {
  return (
    <div className="flex-row-reverse flex">
      <button
        className="rounded-sm h-10 px-3 mx-2 border text-xs bg-white hover:bg-gray-100"
        type="button"
      >
        Sign In
      </button>
      <CurrentDropdown />
      <SupportDropDown />
    </div>
  );
}
