import { MAINVIEW } from '../actions/switchView.js'

export default function (state = {}, action ) {
  switch (action.type) {
    case 'GRAPHABSOLUTE': {
      return 'graphAbsolute'
      break;
    }
    case 'GRAPHRELATIVE': {
      return 'graphRelative'
      break;
    }
    case 'MOVIEDETAILS': {
      return {mainView: 'movieDetails'}
      break;
    }
    case 'MAP': {
      return 'map'
      break;
    }
    case 'LOCATIONSENTIMENT': {
      return {mainView: 'locationSentiment'}
      break;
    }
    default: {
      return state;
    }
  }
}