import { combineReducers } from 'redux';
import PrimaryMovieReducer from './primaryMovie';
import SecondaryMovieReducer from './secondaryMovie';
import GraphDataReducer from './graphData';
import walmartProductsReducer from './walmartProducts';

const rootReducer = combineReducers({
  primaryMovie: PrimaryMovieReducer,
  secondaryMovie: SecondaryMovieReducer,
  graphData: GraphDataReducer,
  walmartProducts: walmartProductsReducer,
});

export default rootReducer;
