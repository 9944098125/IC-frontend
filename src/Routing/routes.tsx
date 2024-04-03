import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import SideNav from "../Components/SideNav";
import Home from "../Pages/Home";

const Layout = () => {
	return (
		<>
			<SideNav>
				<Outlet />
			</SideNav>
		</>
	);
};
const routes = createBrowserRouter([
	{
		path: "/register",
		element: <Registration />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

export default function BaseRoutes(): JSX.Element {
	return <RouterProvider router={routes} />;
}
