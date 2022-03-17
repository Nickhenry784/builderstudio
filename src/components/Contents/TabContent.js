import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GrAdd } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { addToCart, deleteProductInCart } from '../Cart/actions';
import checkButton from '../../images/check.png';
import { displayViewDetail } from '../CenterPopup/actions';

function TabContent(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cart.list);
  const [flag, changeFlagButton] = useState(true);

  const onToggleBottomPopUp = () => {
    if (flag) {
      if (list.length < 3) {
        const action = addToCart(item);
        dispatch(action);
        changeFlagButton(!flag);
      }
    } else {
      const action = deleteProductInCart(item);
      dispatch(action);
      changeFlagButton(!flag);
    }
  };

  const handleClickViewDetail = () => {
    const action = displayViewDetail();
    dispatch(action);
  };

  return (
    <div className="w-96 h-auto border rounded-lg hover:shadow-md hover:scale-105 hover:border-gray-300">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-700">
            <img src={item.logo} alt="" />
          </div>
          <div className="flex flex-col mx-2 justify-between py-2">
            <div className="text-sm font-light">BUILD AN APP LIKE</div>
            <div className="text-xl font-bold">{item.title}</div>
          </div>
        </div>
        <button
          className={classNames(
            'w-12 rounded-full border h-12 flex items-center justify-center mr-4',
            { 'bg-primary-color': !flag },
          )}
          onClick={onToggleBottomPopUp}
          type="button"
        >
          {flag ? (
            <GrAdd size={24} />
          ) : (
            <img className="w-10 h-10 object-cover" src={checkButton} alt="" />
          )}
        </button>
      </div>
      <div className="px-6 flex flex-col">
        <img
          src={item.image}
          alt=""
          className="object-cover h-48 border-t border-b "
        />
        <div className="mt-2 text-sm font-light">INCLUDED FEATURES</div>
        <div className="mt-2 pb-4 text-sm border-b">{item.features}</div>
      </div>
      <div className="flex items-center justify-between px-6 py-6">
        <div className="flex items-center pb-8">
          <div className="flex flex-col mx-2 justify-between items-start">
            <div className="text-sm font-light static">FROM</div>
            <div className="flex justify-center items-center absolute pt-4">
              <div className="text-2xl flex-1 font-bold">$ {item.price}k</div>
              <div className="flex flex-col mx-2 justify-start">
                <div className="text-sm font-light">per</div>
                <div className="text-sm font-light">platform</div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="rounded-md border text-center px-6 py-3 hover:bg-gray-50"
          onClick={handleClickViewDetail}
        >
          <div className="text-sm"> View Details </div>
        </button>
      </div>
    </div>
  );
}

TabContent.propTypes = {
  item: PropTypes.object,
};

export default TabContent;
