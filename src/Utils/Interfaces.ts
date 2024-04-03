export interface RegistrationFormValues {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	profilePicture: string;
	country: string;
	address: string;
	phone: string;
	isVendor: boolean;
}
export interface LoginFormValues {
	emailOrPhone: string;
	password: string;
}
