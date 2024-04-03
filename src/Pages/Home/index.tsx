import React from "react";
import { HomeContainer } from "./styledComponents";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";

export default function Home() {
	const { dark } = useSelector((state: RootState) => state.theme);

	return (
		<React.Fragment>
			<HomeContainer
				bg={dark ? "black" : "white"}
				color={dark ? "white" : "black"}>
				Home
			</HomeContainer>
		</React.Fragment>
	);
}
