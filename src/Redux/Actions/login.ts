import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./Types";
import Api from "../Api/Api";
import { LoginFormValues } from "../../Utils/Interfaces";

export const login = (body: LoginFormValues) => async (dispatch: any) => {
	try {
		dispatch({
			type: LOGIN_START,
		});
		const res = await Api.post("/auth/login", body);
		if (res) {
			console.log(res.data);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
		}
	} catch (err: any) {
		dispatch({
			type: LOGIN_FAIL,
			payload: err.response?.data.message,
		});
	}
};

export const logout = () => async (dispatch: any) => {
	dispatch({
		type: LOGOUT,
	});
};
