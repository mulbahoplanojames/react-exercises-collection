/*
 * ===========================================================================================
 * This component ButtonOne is use with in the SportTable Component to display
 * or render a dropdown for other functionalities
 */

//! Icon
import { MdKeyboardArrowDown, MdOutlineLocalPrintshop } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";

const ButtonOne = () => {
	return (
		<>
			<div className='dropdown dropdown-end'>
				<div tabIndex={0} role='button'>
					<div className='indicator'>
						<button className='bg-[#e83e8c] text-white rounded-sm text-base py-1 px-4 flex items-center  gap-1'>
							Tools <MdKeyboardArrowDown className='text-xl' />
						</button>
					</div>
				</div>
				<div
					tabIndex={0}
					className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow-neutral-400 shadow-xl'
				>
					<div className='card-body'>
						<p className='text-lg cursor-pointer flex gap-2 items-center text-neutral-400 py-2'>
							<MdOutlineLocalPrintshop />
							Print
						</p>
						<p className='text-lg cursor-pointer flex gap-2 items-center text-neutral-400 py-2'>
							<FaRegFilePdf />
							Save as PDF
						</p>
						<p className='text-lg cursor-pointer flex gap-2 items-center text-neutral-400 py-2'>
							<SiMicrosoftexcel />
							Export to Excel
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ButtonOne;
