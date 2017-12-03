import { FETCH_LOCATIONDATA } from '../actions/LocationAction.js';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_LOCATIONDATA:
      return {
        latitude: action.lat,
        longitude: action.lng
      };
    default:
      return state;
  }
}
