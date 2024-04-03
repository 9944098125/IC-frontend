import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeadingText = styled.h1`
	font-size: var(--font-size-xl);
	font-weight: var(--font-weight-bold);
	@media screen and (max-width: 768px) {
		font-size: var(--font-size-md);
	}
`;

export const DescriptionText = styled.p`
	font-size: var(--font-size-md);
	@media screen and (max-width: 768px) {
		font-size: var(--font-size-sm);
	}
`;

export const StyledLink = styled(Link)`
	font-weight: var(--font-weight-extrabold);
	font-size: var(--font-size-lg);
	color: var(--primary-dark-color);
	&:hover {
		color: var(--secondary-dark-color);
		text-decoration: underline;
	}
`;
