import { combineReducers } from "redux";
import register from "./register";
import login from "./login";
import theme from "./theme";

export const rootReducer = combineReducers({
	register,
	login,
	theme,
});

export interface RootState {
	register: {
		loading: boolean;
		msg: string;
		success: boolean;
	};
	login: {
		token: string;
		success: boolean;
		message: string;
		user: {
			address: string;
			country: string;
			email: string;
			id: number;
			isVendor: boolean;
			name: string;
			phone: string;
			profilePicture: string;
		};
		loading: boolean;
	};
	theme: {
		dark: boolean;
	};
}
