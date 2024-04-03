import React from "react";
import {
	AppName,
	Avatar,
	LeftContainer,
	Logo,
	LogoContainer,
	NavbarContainer,
	RightContainer,
} from "./styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import { theme } from "../../Redux/Actions/theme";
import toast from "react-hot-toast";
import logo from "../../Images/logo.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import avatar from "../../Images/avatar.avif";

const Navbar = () => {
	const dispatch: any = useDispatch();
	const { dark } = useSelector((state: RootState) => state.theme);

	const toggleTheme = () => {
		dispatch(theme());
		toast.success("Theme Changed Successfully...");
	};

	return (
		<React.Fragment>
			<NavbarContainer
				bg={dark ? "black" : "white"}
				bb={dark ? "2px solid white" : "2px solid black"}>
				<LeftContainer>
					<LogoContainer
						to="/"
						style={{ textDecoration: "none", color: "inherit" }}>
						<Logo src={logo} alt="" />
					</LogoContainer>
					<AppName fs="25px" color={dark ? "white" : "black"}>
						Instant Click
					</AppName>
				</LeftContainer>
				<RightContainer>
					{dark ? (
						<MdLightMode
							color="white"
							onClick={toggleTheme}
							style={{ cursor: "pointer", fontSize: "40px" }}
						/>
					) : (
						<MdDarkMode
							onClick={toggleTheme}
							style={{ cursor: "pointer", fontSize: "40px" }}
						/>
					)}
					<Avatar src={avatar} alt="avatar" />
				</RightContainer>
			</NavbarContainer>
		</React.Fragment>
	);
};

export default Navbar;
