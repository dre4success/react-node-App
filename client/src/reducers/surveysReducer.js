// sole purpose of reducer is to watch for this type of action and to return a list of surveys
import { FETCH_SURVEYS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_SURVEYS:
			return action.payload;
		default:
			return state;
	}
}