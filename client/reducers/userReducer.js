const INITIAL_STATE = null;

export default function user(state = INITIAL_STATE, action){
	switch(action.type){
		case "test":
			return state;
		default:
			return state;
	}
}