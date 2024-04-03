import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from "../Actions/Types";

const initialValues = {
	message: "",
	success: false,
	loading: false,
	token: localStorage.getItem("asp-ec-token"),
	user: null,
};

export default function login(state = initialValues, action: any) {
	const { type, payload } = action;
	switch (type) {
		case LOGIN_START:
			return {
				...state,
				loading: true,
			};
		case LOGIN_SUCCESS:
			console.log(state.message);
			localStorage.setItem("asp-ec-token", payload.token);
			localStorage.setItem("asp-ec-user", JSON.stringify(payload.user));
			return {
				...state,
				loading: false,
				token: payload.token,
				user: payload.user,
				success: true,
				message: payload.message,
			};
		case LOGIN_FAIL:
			console.log(payload);
			return {
				...state,
				loading: false,
				token: null,
				user: null,
				success: false,
				message: payload,
			};
		case LOGOUT:
			localStorage.removeItem("asp-ec-token");
			localStorage.removeItem("asp-ec-user");
			return {
				...state,
				loading: false,
				token: null,
				user: null,
				success: false,
			};
		default:
			return state;
	}
}
