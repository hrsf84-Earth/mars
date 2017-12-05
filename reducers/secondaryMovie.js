import { FETCH_MOVIE2 } from '../actions/MovieAction';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE2:
      return action.payload.data;
    default:
      return state;
  }
}
