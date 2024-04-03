import React from "react";
import { LoginPageContainer, RelativeContainer } from "./styledComponents";
import { useFormik } from "formik";
import LoginForm from "./LoginForm";
import Heading from "../../Components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/login";
import { RootState } from "../../Redux/Reducers";
import { useNavigate } from "react-router-dom";
import { LoginFormValues } from "../../Utils/Interfaces";
import toast from "react-hot-toast";

export default function Login() {
	const dispatch: any = useDispatch();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = React.useState(false);

	const { success, token, message } = useSelector(
		(state: RootState) => state?.login
	);

	const formik = useFormik({
		initialValues: {
			emailOrPhone: "",
			password: "",
		},
		validate: (values) => {
			let errors: any = {};
			if (!values.emailOrPhone) {
				errors.emailOrPhone = "Email or Phone is Required";
			}
			if (!values.password) {
				errors.password = "Password is required";
			} else if (
				values.password.length < 8 ||
				!values.password.includes("@" || "#" || "!" || "$" || "&")
			) {
				errors.password =
					"Password must contain at least 8 characters, one uppercase, one lowercase and one number";
			}
			return errors;
		},
		onSubmit: (values) => {
			const body: LoginFormValues = {
				emailOrPhone: values.emailOrPhone,
				password: values.password,
			};
			dispatch(login(body));
		},
	});

	React.useEffect(() => {
		if (success && token) {
			navigate("/", { replace: true });
			toast.success(message);
		} else {
			toast.error(message);
		}
	}, [navigate, success, token, message]);

	return (
		<React.Fragment>
			<LoginPageContainer>
				<RelativeContainer>
					<Heading
						heading="Login"
						description="Don't have an account? Please"
						link="/register"
						linkText="Register"
					/>
					<LoginForm
						showPassword={showPassword}
						setShowPassword={setShowPassword}
						formik={formik}
					/>
				</RelativeContainer>
			</LoginPageContainer>
		</React.Fragment>
	);
}
