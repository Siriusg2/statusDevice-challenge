import { combineReducers } from 'redux';
import filtersReducer from './filtersReducer';

const Reducer = combineReducers({
  filters: filtersReducer,
});

export default Reducer;
