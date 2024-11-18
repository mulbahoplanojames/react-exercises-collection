/*
 * ===========================================================================================
 * This component SidebarLinks is use with in the sidebar to display  or render
 * all of the sidebar Navigation links between different components
 */

import LinksDropdown from "../SideBar_Links_Dropdown/LinksDropdown";

//! Links data from the contsants data files
import Holidays, {
	Courses,
	Dashboards,
	Departments,
	Email,
	Fees,
	Students,
} from "../../Data/Data";

//! Icons from React Icon
import { PiMonitorThin } from "react-icons/pi";
import { LuUsers, LuCoffee } from "react-icons/lu";
import { FaBook, FaRegBuilding } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

const SidebarLinks = () => {
	return (
		<>
			<div className='flex-1 mb-8 mx-3'>
				<LinksDropdown
					object={Dashboards}
					title={"Dashboard"}
					icon={<PiMonitorThin className='text-2xl' />}
				/>
				<LinksDropdown
					object={Students}
					title={"Students"}
					icon={<LuUsers className='text-2xl' />}
				/>
				<LinksDropdown
					object={Courses}
					title={"Courses"}
					icon={<FaBook className='text-2xl' />}
				/>
				<LinksDropdown
					object={Departments}
					title={"Departments"}
					icon={<FaRegBuilding className='text-2xl' />}
				/>
				<LinksDropdown
					object={Holidays}
					title={"Holidays"}
					icon={<LuCoffee className='text-2xl' />}
				/>
				<LinksDropdown
					object={Fees}
					title={"Fees"}
					icon={<BiDollar className='text-2xl' />}
				/>
				<LinksDropdown
					object={Email}
					title={"Email"}
					icon={<CiMail className='text-2xl' />}
				/>
			</div>
		</>
	);
};

export default SidebarLinks;
