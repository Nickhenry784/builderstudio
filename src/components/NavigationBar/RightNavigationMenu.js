import classNames from 'classnames';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import sortVertical from '../../images/sort-vertical.svg';

function RightNavigationMenu() {
  const [isShowDropdown, setIsShowDropdown] = useState(true);
  const handleClickArrangeButton = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  const onCloseArrangeButton = () => {
    if (isShowDropdown === false) {
      setIsShowDropdown(!isShowDropdown);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={onCloseArrangeButton}>
      <div className="flex items-center pr-8 justify-between h-50">
        <button
          className="border px-4 h-12 rounded-md mr-4 hover:scale-90 hover:bg-gray-100"
          type="button"
        >
          <BsSearch size={16} />
        </button>
        <button
          className="border flex h-12 items-center justify-between py-4 px-4 hover:bg-gray-100 rounded-md mr-4 hover:scale-90"
          type="button"
        >
          <GrAdd size={16} />
          <div className="ml-4">Custom Template</div>
        </button>
        <button
          className="border h-12 py-4 px-4 relative rounded-md hover:bg-gray-100 hover:scale-90"
          type="button"
          onClick={handleClickArrangeButton}
        >
          <img src={sortVertical} alt="" />
        </button>
        <form
          className={classNames(
            'w-64 border absolute rounded-sm top-24 bg-white right-20',
            { hidden: isShowDropdown },
          )}
        >
          <div className="flex items-center justify-start px-4 py-4 border-b">
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              className="mr-4"
            />
            <div htmlFor="html" className="text-sm">
              By name A-Z
            </div>
          </div>
          <div className="flex items-center justify-start px-4 py-4 border-b">
            <input
              type="radio"
              id="css"
              name="fav_language"
              value="CSS"
              className="mr-4"
            />
            <div htmlFor="css" className="text-sm">
              By name Z-A
            </div>
          </div>
          <div className="flex items-center justify-start px-4 py-4 border-b">
            <input
              type="radio"
              id="reactjs"
              name="fav_language"
              value="Reactjs"
              className="mr-4"
            />
            <div htmlFor="reactjs" className="text-sm">
              By cost: high to low
            </div>
          </div>
          <div className="flex items-center justify-start px-4 py-4">
            <input
              type="radio"
              id="nodejs"
              name="fav_language"
              value="Nodejs"
              className="mr-4"
            />
            <div htmlFor="nodejs" className="text-sm">
              By cost: high to low
            </div>
          </div>
        </form>
      </div>
    </OutsideClickHandler>
  );
}

RightNavigationMenu.propTypes = {};

export default RightNavigationMenu;
