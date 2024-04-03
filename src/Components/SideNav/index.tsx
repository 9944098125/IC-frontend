import React from "react";
import { Layout, OutletContainer, RowInLayout } from "./styledComponents";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function SideNav({ children }: any) {
	return (
		<React.Fragment>
			<Layout>
				<Navbar />
				<RowInLayout>
					<Sidebar />
					<OutletContainer>{children}</OutletContainer>
				</RowInLayout>
			</Layout>
		</React.Fragment>
	);
}
