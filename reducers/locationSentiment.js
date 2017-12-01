import { FETCH_SENTIMENT } from '../actions/MovieAction';

export default function (state = {latitude: 40.7127753, longitude:-74.0059728}, action) {
  switch (action.type) {
    case FETCH_SENTIMENT:
      return action.payload.data;
    default:
      return state;
  }
}
