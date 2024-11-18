/*
 * ===========================================================================================
 * This component Layoyt is use with in the App component to display  or render
 * the sidebar and the navbar which is static with this page and uses the Outlet to display
 * other components with in this site
 
 * With this layout component only the outlets wihich is the other components will be changing
 */

import Navbar from "../NavBar/Navbar";
import Sidebar from "../Side_Bar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { Suspense } from "react";

const Layout = () => {
	/*
	 * This is the main layout component which holds the sidebar and navbar. This layout component
	 * is used in the App.jsx component and only the outlets wihich is the other
	 * components will be changing
	 */
	return (
		// The section tag is used to make the sidebar and navbar a flex row
		<Suspense fallback={spinner}>
			<section className='w-screen h-screen flex flex-row'>
				<Sidebar />
				{/* //! Navbar and the Outlets which represent the other components in a one div  */}
				<div className='w-full overflow-y-scroll relative'>
					<Navbar />
					{/*the Outlet is a react-router-dom component which will be used to render the 
				other components with in this site
				 */}
					<div className='mt-[4.5rem]'>{<Outlet />}</div>
					{/* //! Footer component which is a fixed bottom with z-index of 100 so it will be on top of all other components */}
					<Footer />
				</div>
			</section>
		</Suspense>
	);
};

/**
 * This is a component that renders a spinner with the message "Loading..."bwhen the data is loading.
 */
const spinner = () => {
	return (
		<>
			{/* The section tag is used to make the spinner centered in the screen */}
			<section className='flex justify-center items-center h-screen w-screen'>
				<p className='text-3xl font-bold'>Loading...</p>
			</section>
		</>
	);
};

export default Layout;
