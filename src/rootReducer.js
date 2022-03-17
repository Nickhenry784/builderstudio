import { combineReducers } from 'redux';
import cartReducer from './components/Cart/reducer';
import displayViewDetailReducer from './components/CenterPopup/reducer';

const rootReducers = combineReducers({
  cart: cartReducer,
  display: displayViewDetailReducer,
});

export default rootReducers;
