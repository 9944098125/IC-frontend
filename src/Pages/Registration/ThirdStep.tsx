import React from "react";
import {
	Button,
	ErrorMessage,
	GlassEffect,
	Input,
	InputContainer,
	Label,
	TextArea,
} from "./styledComponents";
import { RegistrationFormValues } from "../../Utils/Interfaces";
import PhoneInput from "react-phone-input-2";
import { Country } from "country-state-city";
import Dropdown from "../../Components/Dropdown";
import { Col, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";

type ThirdStepProps = {
	values: RegistrationFormValues;
	setValues: any;
	error: string;
	setError: any;
	pageChanged: boolean;
	setPageChanged: any;
};
const ThirdStep = (props: ThirdStepProps) => {
	const { values, setValues, error, setError, pageChanged } = props;

	const data = Country.getAllCountries().map((country) => ({
		value: country.name,
		displayValue: `${country.name} - ${country.isoCode}`,
	}));

	const { loading } = useSelector((state: RootState) => state?.register);

	React.useEffect(() => {
		if (values) {
			setError("");
		}
	}, []);

	return (
		<React.Fragment>
			<ErrorMessage>{error}</ErrorMessage>
			<GlassEffect width="80%" className={`${pageChanged ? "slideLeft" : ""}`}>
				<InputContainer width="45%">
					<Label>Country</Label>
					<Dropdown
						options={data}
						onChange={(event: any) =>
							setValues({ ...values, country: event.target.value })
						}
					/>
				</InputContainer>
				<InputContainer width="45%">
					<PhoneInput
						country="in"
						value={values.phone}
						onChange={(phone) => setValues({ ...values, phone: phone })}
					/>
				</InputContainer>
				<InputContainer width="100%">
					<Label>Address</Label>
					<TextArea
						rows={6}
						name="address"
						value={values.address}
						onChange={(event: any) =>
							setValues({ ...values, address: event?.target.value })
						}
						placeholder="Enter your Address..."
					/>
				</InputContainer>
				<InputContainer width="45%">
					<Row>
						<Col xs={6}>
							<Label>IS VENDOR</Label>
							<Input
								type="radio"
								name="isVendor"
								value="true"
								checked={values.isVendor}
								onChange={(event: any) =>
									setValues({ ...values, isVendor: true })
								}
							/>
						</Col>
						<Col xs={6}>
							<Label>NOT A VENDOR</Label>
							<Input
								type="radio"
								name="isVendor"
								value="false"
								checked={!values.isVendor}
								onChange={(event: any) =>
									setValues({ ...values, isVendor: false })
								}
							/>
						</Col>
					</Row>
				</InputContainer>
				<InputContainer width="45%">
					<Button type="submit">
						Register {loading && <Spinner animation="border" />}
					</Button>
				</InputContainer>
			</GlassEffect>
		</React.Fragment>
	);
};

export default ThirdStep;
