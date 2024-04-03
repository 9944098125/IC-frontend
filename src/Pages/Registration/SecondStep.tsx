import React from "react";
import {
	GlassEffect,
	Input,
	InputContainer,
	PasswordFieldContainer,
	Button,
	ErrorMessage,
} from "./styledComponents";
import { RegistrationFormValues } from "../../Utils/Interfaces";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

type SecondStepProps = {
	showPassword: boolean;
	showConfirmPassword: boolean;
	setShowPassword: any;
	setShowConfirmPassword: any;
	values: RegistrationFormValues;
	setValues: any;
	error: string;
	pageChanged: boolean;
	setPageChanged: any;
};
const SecondStep = (props: SecondStepProps) => {
	const {
		showPassword,
		showConfirmPassword,
		setShowConfirmPassword,
		setShowPassword,
		values,
		setValues,
		error,
		pageChanged,
	} = props;

	return (
		<React.Fragment>
			<ErrorMessage>{error}</ErrorMessage>
			<GlassEffect
				width="70%"
				className={`${!pageChanged ? "slideRight" : ""}`}>
				<InputContainer width="100%">
					<PasswordFieldContainer>
						<Input
							type={showPassword ? "text" : "password"}
							value={values.password}
							name="password"
							onChange={(event: any) =>
								setValues({ ...values, password: event.target.value })
							}
							placeholder="Enter your password"
						/>
						{showPassword ? (
							<div
								style={{ marginLeft: "-30px", fontSize: "25px" }}
								onClick={() => setShowPassword(!showPassword)}>
								<FaEye />
							</div>
						) : (
							<div
								style={{ marginLeft: "-30px", fontSize: "25px" }}
								onClick={() => setShowPassword(!showPassword)}>
								<FaEyeSlash />
							</div>
						)}
					</PasswordFieldContainer>
				</InputContainer>

				<InputContainer width="100%">
					<PasswordFieldContainer>
						<Input
							type={showConfirmPassword ? "text" : "password"}
							value={values.confirmPassword}
							name="confirmPassword"
							onChange={(event: any) =>
								setValues({ ...values, confirmPassword: event.target.value })
							}
							placeholder="Confirm your password"
						/>
						{showConfirmPassword ? (
							<div
								style={{ marginLeft: "-30px", fontSize: "25px" }}
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
								<FaEye />
							</div>
						) : (
							<div
								style={{ marginLeft: "-30px", fontSize: "25px" }}
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
								<FaEyeSlash />
							</div>
						)}
					</PasswordFieldContainer>
				</InputContainer>
				<InputContainer width="45%">
					<Button type="submit">Continue</Button>
				</InputContainer>
			</GlassEffect>
		</React.Fragment>
	);
};

export default SecondStep;
