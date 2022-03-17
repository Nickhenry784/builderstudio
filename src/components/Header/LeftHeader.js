import React from 'react';
import PropTypes from 'prop-types';
import RightHeader from './RightHeader';

export default function LeftHeader({ steps }) {
  return (
    <div className="flex items-center justify-between pl-12 pr-6">
      <div className="flex items-center">
        <div className="text-xs pr-3">1. Choose a base</div>
        <div className="text-xs pr-3 text-gray-400">2. Refine features</div>
        <div className="text-xs text-gray-400">3. Plan delivery</div>
      </div>
      <RightHeader />
    </div>
  );
}

LeftHeader.propTypes = {
  steps: PropTypes.array.isRequired,
};
