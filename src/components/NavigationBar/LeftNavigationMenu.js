import React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';

function LeftNavigationMenu(props) {
  return (
    <div className="flex items-center">
      <div className="flex flex-row items-center justify-between w-60">
        <div className="text-3xl font-semibold">Choose a base</div>
        <div className="">
          <BsQuestionCircle size={24} />
        </div>
      </div>
      <div className="relative w-16 h-16 mx-12">
        <div className="absolute left-0 top-0 w-16 h-16 bg-primary-color-opacity-2 rounded-full animate-wiggle" />
        <div className="absolute left-0 top-0 w-16 h-16 bg-primary-color-opacity-1 rounded-full animate-wiggleborder" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-color w-10 h-10 border border-black rounded-full" />
        <div className="absolute border rounded-xl -top-2 -right-8 w-12 text-primary-color text-center text-xs">
          BETA
        </div>
      </div>
    </div>
  );
}

LeftNavigationMenu.propTypes = {};

export default LeftNavigationMenu;
