import React from "react";
import {
	Avatar,
	Button,
	ErrorMessage,
	GlassEffect,
	ImageInput,
	ImageLabel,
	Input,
	InputContainer,
} from "./styledComponents";
import { RegistrationFormValues } from "../../Utils/Interfaces";
import { Spinner } from "react-bootstrap";

type FirstStepProps = {
	values: RegistrationFormValues;
	setValues: any;
	changeImage: (file: File) => void;
	error: string;
	imageUploading: boolean;
	pageChanged: boolean;
};

const FirstStep = (props: FirstStepProps) => {
	const { values, setValues, changeImage, error, imageUploading, pageChanged } =
		props;

	return (
		<React.Fragment>
			<ErrorMessage>{error}</ErrorMessage>
			<GlassEffect width="80%" className={`${pageChanged ? "slideLeft" : ""}`}>
				<InputContainer width="45%">
					<Input
						type="text"
						value={values.name}
						name="name"
						placeholder="Enter your Name..."
						onChange={(event) =>
							setValues({ ...values, name: event.target.value })
						}
					/>
				</InputContainer>
				<InputContainer width="45%">
					<Input
						type="text"
						value={values.email}
						name="email"
						placeholder="Enter your Email Address..."
						onChange={(event) =>
							setValues({ ...values, email: event.target.value })
						}
					/>
				</InputContainer>
				<InputContainer width="45%">
					<ImageLabel htmlFor="profilePicture">
						<Avatar
							src={
								values.profilePicture
									? values.profilePicture
									: "https://www.svgrepo.com/show/404543/avatar-beard-man-person.svg"
							}
							alt=""
						/>
						<ImageInput
							id="profilePicture"
							type="file"
							onChange={(event: any) => changeImage(event.target.files[0])}
						/>
					</ImageLabel>
				</InputContainer>
				<InputContainer width="45%">
					<Button disabled={imageUploading} type="submit">
						Continue{" "}
						{imageUploading && <Spinner animation="border" size="sm" />}
					</Button>
				</InputContainer>
			</GlassEffect>
		</React.Fragment>
	);
};

export default FirstStep;
