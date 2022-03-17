import React, { useState } from 'react';
import supportPeople from '../../images/experticon1.png';

export default function SupportDropDown() {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const onToggleDropDown = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center rounded-sm mx-2 h-10 border text-xs bg-white hover:bg-gray-100"
        type="button"
        onMouseLeave={onToggleDropDown}
        onMouseEnter={onToggleDropDown}
      >
        <img className="w-8 h-8 object-scale-down" src={supportPeople} alt="" />
        <div className="px-2">Talk to our experts </div>
      </button>
      {isShowDropdown && (
        <div className="absolute flex flex-col border rounded top-0 left-0 transform translate-y-10 bg-white z-10">
          <div className="text-xs px-3 border-b py-3 hover:bg-gray-100">
            Book a demo call
          </div>
          <div className="text-xs px-3 border-b py-3 hover:bg-gray-100">
            Book a spec call
          </div>
          <div className="text-xs px-3 py-3 hover:bg-gray-100">Live chat</div>
        </div>
      )}
    </div>
  );
}
