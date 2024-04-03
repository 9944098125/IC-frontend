import React from "react";
import {
	Button,
	Form,
	GlassEffect,
	Input,
	InputContainer,
	PasswordFieldContainer,
} from "./styledComponents";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ErrorMessage } from "../Registration/styledComponents";

type LoginFormProps = {
	showPassword: boolean;
	setShowPassword: any;
	formik: any;
};

const LoginForm = (props: LoginFormProps) => {
	const { showPassword, setShowPassword, formik } = props;
	// console.log(formik.errors);
	return (
		<React.Fragment>
			<GlassEffect width="50%">
				<Form onSubmit={formik.handleSubmit}>
					<InputContainer width="100%">
						<Input
							type="text"
							name="emailOrPhone"
							value={formik.values.emailOrPhone}
							onChange={formik.handleChange}
							placeholder="Enter your Email or Phone Number"
						/>
						{formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
							<ErrorMessage>{formik.errors.emailOrPhone}</ErrorMessage>
						)}
					</InputContainer>
					<InputContainer width="100%">
						<PasswordFieldContainer>
							<Input
								type={showPassword ? "text" : "password"}
								value={formik.values.password}
								name="password"
								onChange={formik.handleChange}
								placeholder="Enter your password"
							/>
							{showPassword ? (
								<div
									style={{ marginLeft: "-25px", fontSize: "25px" }}
									onClick={() => setShowPassword(!showPassword)}>
									<FaEye />
								</div>
							) : (
								<div
									style={{ marginLeft: "-25px", fontSize: "25px" }}
									onClick={() => setShowPassword(!showPassword)}>
									<FaEyeSlash />
								</div>
							)}
						</PasswordFieldContainer>
						{formik.touched.password && formik.errors.password && (
							<ErrorMessage>{formik.errors.password}</ErrorMessage>
						)}
					</InputContainer>
					<InputContainer width="100%">
						<Button type="submit">Login</Button>
					</InputContainer>
				</Form>
			</GlassEffect>
		</React.Fragment>
	);
};

export default LoginForm;
