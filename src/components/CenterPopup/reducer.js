import * as actionTypes from './constant';

const initalState = {
  display: false,
};

const displayViewDetailReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_VIEWDETAIL: {
      const newDisplay = !state.display;

      return {
        ...state,
        display: newDisplay,
      };
    }

    default:
      return state;
  }
};

export default displayViewDetailReducer;
