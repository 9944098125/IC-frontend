import { Link } from "react-router-dom";
import styled from "styled-components";

type NavbarContainerProps = {
	bg: string;
	bb: string;
};
type AppNameProps = {
	fs: string;
	color: string;
};
type SidebarContainerProps = {
	bg: string;
	br: string;
};

export const NavbarContainer = styled.div<NavbarContainerProps>`
	padding: 5px 10px;
	background-color: ${(props) => props.bg};
	border-bottom: ${(props) => props.bb};
	height: 8vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
export const LogoContainer = styled(Link)`
	height: 60px;
	width: 60px;
	@media screen and (max-width: 768px) {
		height: 30px;
		width: 30px;
	}
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
export const AppName = styled.h3<AppNameProps>`
    font-size: ${(props) => props.fs}
    font-weight:700;
    color:${(props) => props.color};
`;
export const Layout = styled.div`
	width: 100%;
	height: 100vh;
`;
export const RowInLayout = styled.div`
	display: flex;
	height: 90vh;
	overflow-y: scroll;
`;
export const RightContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
`;
export const Avatar = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	object-fit: cover;
`;
export const SidebarContainer = styled.div<SidebarContainerProps>`
	height: 90vh;
	width: 15%;
	position: fixed;
	background-color: ${(props) => props.bg};
	border-right: ${(props) => props.br};
`;
export const OutletContainer = styled.div`
	width: 100%;
	margin-left: 15%;
`;
