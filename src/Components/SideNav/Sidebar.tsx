import React from "react";
import { SidebarContainer } from "./styledComponents";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";

const Sidebar = () => {
	const { dark } = useSelector((state: RootState) => state.theme);

	return (
		<React.Fragment>
			<SidebarContainer
				bg={dark ? "black" : "white"}
				br={dark ? "2px solid white" : "2px solid black"}>
				Sidebar
			</SidebarContainer>
		</React.Fragment>
	);
};

export default Sidebar;
