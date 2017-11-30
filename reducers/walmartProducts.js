import { FETCH_PRODUCTS } from '../actions/MovieAction';

export default function ( state = {}, action ) {
	switch(action.type) {
		case FETCH_PRODUCTS:
			// console.log('inside the reducers in WPs,: ', action.payload)
			return action.payload;
		default:
			return state;
	}
}
