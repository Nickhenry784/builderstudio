import React from 'react';
import LeftHeader from './LeftHeader';
import logo from '../../images/engineer-logo.svg';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 block clear-both w-full h-20 border-b-2 bg-white z-30">
      <div className="h-full w-1/5 border-r-2 flex items-center pl-8 float-left">
        <img className="" src={logo} alt="" />
      </div>
      <div className="h-full pl-80 py-6">
        <LeftHeader steps={[]} />
      </div>
    </div>
  );
}
