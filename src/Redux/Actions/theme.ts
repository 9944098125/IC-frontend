import { TOGGLE_THEME } from "./Types";

export const theme = () => (dispatch: any) => {
	dispatch({
		type: TOGGLE_THEME,
	});
};
