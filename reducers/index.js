import { combineReducers } from 'redux';
import PrimaryMovieReducer from './primaryMovie';
import SecondaryMovieReducer from './secondaryMovie';
import GraphDataReducer from './graphData';
import walmartProductsReducer from './walmartProducts';
import changeViewReducer from './mainView';
import locationSentimentReducer from './locationSentiment';
import locationDataReducer from './locationData';

const rootReducer = combineReducers({
  primaryMovie: PrimaryMovieReducer,
  secondaryMovie: SecondaryMovieReducer,
  graphData: GraphDataReducer,
  walmartProducts: walmartProductsReducer,
  mainView: changeViewReducer,
  locationSentiment: locationSentimentReducer,
  locationData: locationDataReducer

});

export default rootReducer;
