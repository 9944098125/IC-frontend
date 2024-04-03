import React from "react";
import {
	Container,
	DescriptionText,
	HeadingText,
	StyledLink,
} from "./styled.components";

type HeadingProps = {
	heading: string;
	description: string;
	link: string;
	linkText: string;
};

const Heading = (props: HeadingProps) => {
	const { heading, description, link, linkText } = props;
	return (
		<React.Fragment>
			<Container>
				<HeadingText>{heading}</HeadingText>
				<DescriptionText>
					{description}, <StyledLink to={link}>{linkText}</StyledLink>
				</DescriptionText>
			</Container>
		</React.Fragment>
	);
};

export default Heading;
