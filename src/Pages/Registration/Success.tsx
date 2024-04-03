import React from "react";
import { SuccessImage, SuccessImageContainer } from "./styledComponents";
import successImage from "../../Images/success.png";

const Success = () => {
	return (
		<React.Fragment>
			<SuccessImageContainer>
				<SuccessImage src={successImage} alt="" />
			</SuccessImageContainer>
		</React.Fragment>
	);
};

export default Success;
