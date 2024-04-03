import styled from "styled-components";
import registerBg from "../../Images/register-bg.png";

type InputContainerProps = {
	width: string;
};
type GlassEffectProps = {
	width: string;
};
type ButtonProps = {
	disabled?: boolean;
};
export const RegistrationPageContainer = styled.div`
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
		background-image: url(${registerBg});
		background-size: cover;
		background-position: center;
		opacity: 0.6;
	}
`;

export const RelativeContainer = styled.div`
	position: relative;
	width: 100%;
`;

export const GlassEffect = styled.div<GlassEffectProps>`
	background: rgba(255, 255, 255, 0.2);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
	padding: 15px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	width: ${(props) => props.width};
`;

export const InputContainer = styled.div<InputContainerProps>`
	width: ${(props) => props.width};
	margin-bottom: 15px;
`;

export const Input = styled.input`
	height: 45px;
	width: 100%;
	outline: none;
	border: none;
	border-radius: 6px;
	font-size: var(--font-size-md);
	font-weight: var(--font-weight-bold);
	padding: 3px 5px;
	&:active,
	&:focus {
		border: 2px solid var(--primary-dark-color);
		height: 55px;
	}
`;

export const ImageInput = styled.input`
	display: none;
`;

export const Label = styled.label`
	font-size: var(--font-size-xs);
	font-weight: var(--font-weight-bold);
`;

export const ImageLabel = styled.label`
	font-size: var(--font-size-md);
	font-weight: var(--font-weight-bold);
	color: var(--secondary-dark-color);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 150px;
	width: 150px;
`;

export const Avatar = styled.img`
	height: 140px;
	width: 140px;
	border-radius: 50%;
	cursor: pointer;
	border: 2px solid var(--primary-dark-color);
	&:hover {
		height: 150px;
		width: 150px;
	}
`;

export const Button = styled.button<ButtonProps>`
	background-color: var(--primary-dark-color);
	height: 45px;
	width: 80%;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	font-size: var(--font-size-md);
	border: none;
	border-radius: 6px;
	color: white;

	&:hover {
		background-color: var(--secondary-dark-color);
		height: 50px;
		width: 90%;
	}
`;

export const ErrorMessage = styled.div`
	color: red;
	font-size: var(--font-size-md);
`;

export const PasswordFieldContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const TextArea = styled.textarea`
	width: 100%;
	border-radius: 8px;
	&:active,
	&:focus {
		border: 2px solid var(--primary-dark-color);
	}
`;
export const SuccessImageContainer = styled.div`
	width: 350px;
	height: 350px;
	@media screen and (max-width: 768px) {
		width: 250px;
		height: 250px;
	}
`;
export const SuccessImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
