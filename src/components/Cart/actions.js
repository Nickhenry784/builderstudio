import * as actionTypes from './constant';

export function addToCart(product) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
}

export function deleteCart() {
  return {
    type: actionTypes.DELETE_TO_CART,
  };
}

export function deleteProductInCart(product) {
  return {
    type: actionTypes.DELETE_PRODUCT_IN_CART,
    payload: product,
  };
}
