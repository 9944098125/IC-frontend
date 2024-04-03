import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "./Types";
import Api from "../Api/Api";
import { RegistrationFormValues } from "../../Utils/Interfaces";

// assigning the form values receiving from component the registration form values
export const register =
	(requestBody: RegistrationFormValues) => async (dispatch: any) => {
		try {
			dispatch({
				type: REGISTER_START,
			});
			const res = await Api.post("/auth/register", requestBody);
			if (res) {
				dispatch({
					type: REGISTER_SUCCESS,
					payload: res.data?.message,
				});
			}
		} catch (err: any) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response?.data.message,
			});
		}
	};
