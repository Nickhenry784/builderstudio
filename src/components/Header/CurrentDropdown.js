import React, { useState } from 'react';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import money from './data/money';
import checkList from '../../images/checklist.png';
import downwardArrow from '../../images/downward-arrow.png';

export default function CurrentDropdown() {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [currencyIndex, setCurrencyIndex] = useState(8);

  const onToggleDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  const onCloseCurrencyButton = () => {
    if (isShowDropdown === true) {
      setIsShowDropdown(!isShowDropdown);
    }
  };

  const onChangeCurrencyIdx = (idx) => {
    setCurrencyIndex(idx);
    setIsShowDropdown(!isShowDropdown);
  };

  return (
    <OutsideClickHandler onOutsideClick={onCloseCurrencyButton}>
      <div className="relative">
        <button
          type="button"
          className="flex items-center justify-between rounded-sm h-10 px-3 mx-3 border text-xs bg-white hover:bg-gray-100"
          onClick={onToggleDropdown}
        >
          <span>{money[currencyIndex].code}</span>
          <img
            className=" pl-1 h-4 w-4 object-cover"
            src={downwardArrow}
            alt=""
          />
        </button>
        {isShowDropdown && (
          <div className="absolute top-0 right-0 translate-y-10 w-60 bg-white flex flex-col border rounded mt-1 z-20">
            {money.map((item, index) => (
              <div
                className="flex items-center py-3 border-b hover:bg-gray-200"
                key={item.code}
                onClick={() => onChangeCurrencyIdx(index)}
                role="button"
                tabIndex="0"
              >
                <div className="flex-1 flex items-center">
                  <img className="px-3 w-10 h-5" src={item.image} alt="" />
                  <div className="text-xs pr-5">{item.name}</div>
                </div>
                <div className="w-8 h-6">
                  <img
                    className={classNames('pr-3 object-scale-down', {
                      hidden: index !== currencyIndex,
                    })}
                    src={checkList}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}
