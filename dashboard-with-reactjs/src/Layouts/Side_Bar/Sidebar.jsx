/*
 * ===========================================================================================
 * This component Sidebar is use with in the layout component to display  or render
 * all of the sidebar Navigation links between different components
 */

import { RiSchoolFill } from "react-icons/ri";
import UserMiniProfie from "../../Components/User_Mini_Profile/UserMiniProfie";
import SidebarLinks from "../../Components/SideBar_NavLinks/SidebarLinks";
import LinksDropdown from "../../Components/SideBar_Links_Dropdown/LinksDropdown";
//form from constants data
import { Forms } from "../../Data/Data";

//Icon from react icon
import { MdOutlineFormatIndentIncrease } from "react-icons/md";

const Sidebar = () => {
	return (
		<>
			<div className='w-[280px] flex flex-col  overflow-y-scroll sm:block hidden'>
				{/* // Logo */}
				<div className='flex items-center justify-center gap-3 bg-2 py-4 cursor-pointer mb-8'>
					<RiSchoolFill className='text-4xl text-white' />
					<h1 className='text-3xl text-white'>Dev!Tech</h1>
				</div>
				{/* // User profile */}
				<UserMiniProfie />
				{/* // Side Bar Navlinks */}
				<SidebarLinks />
				{/* // Footer Bar Navlinks */}
				<div className='px-2'>
					<LinksDropdown
						object={Forms}
						title={"Forms"}
						icon={<MdOutlineFormatIndentIncrease className='text-2xl' />}
					/>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
