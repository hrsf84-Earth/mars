import { MAINVIEW } from '../actions/switchView.js'

export default function (state = {}, action ) {
  switch (action.type) {
    case 'GRAPHABSOLUTE': {
      return {mainView: 'graphAbsolute'}
      break;
    }
    case 'GRAPHRELATIVE': {
      return {mainView: 'graphRelative'}
      break;
    }
    case 'MAP': {
      return {mainView: 'map'}
      break;
    }
    case 'TWITTER': {
      return {mainView: 'twitter'}
      break;
    }
    default: {
      return state;
    }
  }
}