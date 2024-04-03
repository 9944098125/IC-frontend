import styled from "styled-components";

type HomeContainerProps = {
	bg: string;
	color: string;
};
export const HomeContainer = styled.div<HomeContainerProps>`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.color};
	padding: 15px;
`;
