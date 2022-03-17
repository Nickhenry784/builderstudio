import * as actionTypes from './constant';

const initalState = {
  list: [],
  flag: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const newList = [...state.list];
      const newListFlag = [...state.flag];
      const productObject = newList.find((obj) => obj.id === action.payload.id);

      if (!productObject) {
        newList.push(action.payload);
        newListFlag.push({
          id: action.payload.id,
          display: true,
        });
      } else {
        const productIndex = newList.findIndex(
          (obj) => obj.id === action.payload.id,
        );
        newList.splice(productIndex, 1);
        newListFlag.splice(productIndex, 1);
      }

      return {
        ...state,
        list: newList,
        flag: newListFlag,
      };
    }

    case actionTypes.DELETE_TO_CART: {
      const newList = [];

      return {
        ...state,
        list: newList,
      };
    }

    case actionTypes.DELETE_PRODUCT_IN_CART: {
      const newList = [...state.list];
      const newListFlag = [...state.flag];
      const productIndex = newList.findIndex(
        (obj) => obj.id === action.payload.id,
      );
      newList.splice(productIndex, 1);
      newListFlag.splice(productIndex, 1);

      return {
        ...state,
        list: newList,
        flag: newListFlag,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
