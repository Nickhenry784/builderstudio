import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { deleteCart } from './actions';

function FooterCard(props) {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.list);

  const handleClearAll = () => {
    dispatch(deleteCart());
  };

  return (
    <div
      className={classNames(
        'h-24 w-4/5 flex bg-white justify-between border-t items-center right-0 bottom-0 fixed z-10',
        {
          hidden: listCart.length === 0,
        },
      )}
    >
      <div className="flex justify-start px-6 w-1/4">
        <div className="flex items-center justify-start mr-4">
          {listCart.map((product) => (
            <div className="w-12 h-12 mr-4" key={product.id}>
              <img src={product.logo} alt="" />
            </div>
          ))}
        </div>
        <button
          className="text-sm underline hover:scale-95"
          onClick={handleClearAll}
          type="button"
        >
          Clear All
        </button>
      </div>
      <div className="flex justify-between items-center w-2/6">
        <div className="text-sm">{listCart.length} templates selected</div>
        <button
          className="w-2/3 h-24 text-center font-bold text-black bg-green-400 hover:bg-green-500"
          type="button"
        >
          Build Now
        </button>
      </div>
    </div>
  );
}

FooterCard.propTypes = {};

export default FooterCard;
