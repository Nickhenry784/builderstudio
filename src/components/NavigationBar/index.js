import React from 'react';
import PropTypes from 'prop-types';
import LeftNavigationMenu from './LeftNavigationMenu';
import RightNavigationMenu from './RightNavigationMenu';

function NavigationBar(props) {
  return (
    <div className="flex items-center justify-between px-12 h-32 border-b bg-white">
      <LeftNavigationMenu />
      <RightNavigationMenu />
    </div>
  );
}

NavigationBar.propTypes = {};

export default NavigationBar;
