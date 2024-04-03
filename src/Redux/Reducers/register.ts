import {
	REGISTER_FAIL,
	REGISTER_START,
	REGISTER_SUCCESS,
} from "../Actions/Types";

const initialState = {
	loading: false,
	msg: "",
	success: false,
};

export default function register(state = initialState, action: any) {
	const { type, payload } = action;
	switch (type) {
		case REGISTER_START:
			return {
				...state,
				loading: true,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				msg: payload,
				success: true,
			};
		case REGISTER_FAIL:
			return {
				...state,
				loading: false,
				msg: payload,
				success: false,
			};
		default:
			return state;
	}
}
