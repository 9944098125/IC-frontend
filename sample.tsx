import React, { useState } from "react";
import styled from "styled-components";

const RegistrationPageContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const FormContainer = styled.div`
	width: 400px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
`;

const StepContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StepTitle = styled.h2`
	margin-bottom: 20px;
`;

const StepForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InputField = styled.input`
	width: 100%;
	margin-bottom: 20px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const Button = styled.button`
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`;

const ErrorMessage = styled.div`
	color: red;
	margin-bottom: 10px;
`;

const RegistrationPage = () => {
	const [step, setStep] = useState(1);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [profilePicture, setProfilePicture] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [country, setCountry] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [error, setError] = useState("");

	const validateStep = () => {
		switch (step) {
			case 1:
				if (!name.trim() || !email.trim() || !profilePicture.trim()) {
					setError("Please fill in all fields");
					return false;
				}
				return true;
			case 2:
				if (!password || !confirmPassword || password !== confirmPassword) {
					setError("Passwords do not match");
					return false;
				}
				return true;
			case 3:
				if (!country.trim() || !address.trim()) {
					setError("Please fill in all fields");
					return false;
				}
				return true;
			case 4:
				if (!phone.trim()) {
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
		if (validateStep()) {
			if (step < 4) {
				setStep(step + 1);
				setError("");
			} else {
				alert("Registration Successful!");
			}
		}
	};

	return (
		<RegistrationPageContainer>
			<FormContainer>
				<StepContainer>
					<StepTitle>Step {step}</StepTitle>
					{error && <ErrorMessage>{error}</ErrorMessage>}
					<StepForm onSubmit={handleSubmit}>
						{step === 1 && (
							<>
								<InputField
									type="text"
									placeholder="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<InputField
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<InputField
									type="text"
									placeholder="Profile Picture"
									value={profilePicture}
									onChange={(e) => setProfilePicture(e.target.value)}
								/>
							</>
						)}
						{step === 2 && (
							<>
								<InputField
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<InputField
									type="password"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</>
						)}
						{step === 3 && (
							<>
								<InputField
									type="text"
									placeholder="Country"
									value={country}
									onChange={(e) => setCountry(e.target.value)}
								/>
								<InputField
									type="text"
									placeholder="Address"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</>
						)}
						{step === 4 && (
							<>
								<InputField
									type="text"
									placeholder="Phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</>
						)}
						<Button type="submit">
							{step === 4 ? "Register" : "Continue"}
						</Button>
					</StepForm>
				</StepContainer>
			</FormContainer>
		</RegistrationPageContainer>
	);
};

export default RegistrationPage;
