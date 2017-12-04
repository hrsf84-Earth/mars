import { FETCH_LOCATIONDATA } from '../actions/LocationAction.js';

export default function (state = {latitude: 40.7127753, longitude:-74.0059728}, action) {
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
