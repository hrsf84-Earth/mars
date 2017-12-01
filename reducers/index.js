import { combineReducers } from 'redux';
import PrimaryMovieReducer from './primaryMovie';
import SecondaryMovieReducer from './secondaryMovie';
import GraphDataReducer from './graphData';
import walmartProductsReducer from './walmartProducts';
import changeViewReducer from './mainView';

const rootReducer = combineReducers({
  primaryMovie: PrimaryMovieReducer,
  secondaryMovie: SecondaryMovieReducer,
  graphData: GraphDataReducer,
  walmartProducts: walmartProductsReducer,
  mainView: changeViewReducer
});

export default rootReducer;
