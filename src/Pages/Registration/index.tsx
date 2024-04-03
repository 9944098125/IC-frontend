import React from "react";
import {
	RegistrationPageContainer,
	RelativeContainer,
} from "./styledComponents";
import Heading from "../../Components/Heading";
import FirstStep from "./FirstStep";
import { RegistrationFormValues } from "../../Utils/Interfaces";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import Success from "./Success";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../Redux/Actions/register";
import { RootState } from "../../Redux/Reducers";
import toast from "react-hot-toast";

export default function Registration() {
	const dispatch: any = useDispatch();
	const navigate = useNavigate();
	const [step, setStep] = React.useState(1);
	const [values, setValues] = React.useState<RegistrationFormValues>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		profilePicture: "",
		country: "",
		address: "",
		phone: "",
		isVendor: false,
	});
	const [imageUploading, setImageUploading] = React.useState(false);
	const [error, setError] = React.useState("");
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
	const [pageChanged, setPageChanged] = React.useState(false);

	const { success, msg } = useSelector((state: RootState) => state?.register);

	const validate = () => {
		switch (step) {
			case 1:
				if (
					!values.name.trim() ||
					!values.email.trim() ||
					!values.email.includes("@" || ".") ||
					!values.profilePicture.trim()
				) {
					setError("Please fill in all fields");
					return false;
				}
				return true;
			case 2:
				if (
					!values.password ||
					!values.password.includes("@" || "%" || "#" || "$") ||
					values.password.length < 8 ||
					!values.confirmPassword ||
					values.password !== values.confirmPassword
				) {
					setError("Fill the Passwords or they do not match");
					return false;
				}
				return true;
			case 3:
				if (!values.country.trim() || !values.address.trim()) {
					setError("Please fill in all fields");
					return false;
				}
				return true;
			case 4:
				if (!values.phone.trim() || !values.isVendor) {
					setError("Please fill in all fields");
					return false;
				}
				return true;
			default:
				return true;
		}
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (validate()) {
			if (step < 3) {
				setTimeout(() => {
					setStep((pre: number) => pre + 1);
				}, 300);
				setPageChanged(!pageChanged);
			} else {
				setTimeout(() => {
					setStep((pre) => pre + 1);
				}, 300);
				// console.log(values);
				dispatch(register(values));
			}
		}
	};

	React.useEffect(() => {
		if (success) {
			setTimeout(() => {
				navigate("/login");
			}, 5000);
			toast.success(msg);
		} else {
			toast.error(msg);
		}
	}, [success, navigate, msg]);

	const changeImage = async (file: File) => {
		setImageUploading(true);
		if (file === null) {
			return;
		} else if (
			file.type === "image/jpeg" ||
			"image/jpg" ||
			"image/png" ||
			"image.svg" ||
			"image/gfif"
		) {
			const imgData = new FormData();
			imgData.append("file", file);
			imgData.append("upload_preset", "save_qa");
			imgData.append("cloud_name", "dakda5ni3");
			await fetch("https://api.cloudinary.com/v1_1/dakda5ni3/image/upload", {
				method: "POST",
				body: imgData,
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					setValues({ ...values, profilePicture: data.url });
					setImageUploading(false);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			return;
		}
	};

	return (
		<React.Fragment>
			<RegistrationPageContainer>
				<RelativeContainer>
					<Heading
						heading="Registration"
						description="Already have an account ? Then Please"
						linkText="Login"
						link="/login"
					/>
					<form
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
						onSubmit={handleSubmit}>
						{step === 1 && (
							<FirstStep
								values={values}
								setValues={setValues}
								changeImage={changeImage}
								error={error}
								imageUploading={imageUploading}
								pageChanged={pageChanged}
							/>
						)}
						{step === 2 && (
							<SecondStep
								values={values}
								setValues={setValues}
								showPassword={showPassword}
								showConfirmPassword={showConfirmPassword}
								setShowPassword={setShowPassword}
								setShowConfirmPassword={setShowConfirmPassword}
								error={error}
								pageChanged={pageChanged}
								setPageChanged={setPageChanged}
							/>
						)}
						{step === 3 && (
							<ThirdStep
								setError={setError}
								values={values}
								setValues={setValues}
								error={error}
								pageChanged={pageChanged}
								setPageChanged={setPageChanged}
							/>
						)}
						{step === 4 && success && <Success />}
					</form>
				</RelativeContainer>
			</RegistrationPageContainer>
		</React.Fragment>
	);
}
