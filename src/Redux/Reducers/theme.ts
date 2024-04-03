import { TOGGLE_THEME } from "../Actions/Types";

const initialState = {
	dark: false,
};

export default function theme(state = initialState, action: any) {
	const { type } = action;
	switch (type) {
		case TOGGLE_THEME:
			return {
				...state,
				dark: !state.dark,
			};
		default:
			return state;
	}
}
