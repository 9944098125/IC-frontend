import styled from "styled-components";
import loginBg from "../../Images/login-bg.jpg";

type GlassEffectProps = {
	width: string;
};
type InputContainerProps = {
	width: string;
};
type ButtonProps = {
	disabled?: boolean;
};

export const LoginPageContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${loginBg});
		background-size: cover;
		background-position: center;
		opacity: 0.8;
	}
`;
export const RelativeContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const GlassEffect = styled.div<GlassEffectProps>`
	background: rgba(255, 255, 255, 0.2);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	width: ${(props) => props.width};
`;
export const InputContainer = styled.div<InputContainerProps>`
	width: ${(props) => props.width};
	margin-bottom: 15px;
	padding: 0 0;
`;

export const Input = styled.input`
	height: 45px;
	width: 100%;
	outline: none;
	border: none;
	border-radius: 6px;
	font-size: var(--font-size-md);
	font-weight: var(--font-weight-bold);
	&:active,
	&:focus {
		border: 2px solid var(--primary-dark-color);
		height: 55px;
	}
`;
export const PasswordFieldContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;
export const Button = styled.button<ButtonProps>`
	background-color: var(--primary-dark-color);
	height: 45px;
	width: 100%;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	font-size: var(--font-size-md);
	border: none;
	border-radius: 6px;
	color: white;

	&:hover {
		background-color: var(--secondary-dark-color);
		height: 50px;
	}
`;
export const Form = styled.form`
	width: 100%;
	padding: 20px;
`;
