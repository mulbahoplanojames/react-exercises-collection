/*
 * ===========================================================================================
 * This component ButtonTwo is use with in the SportTable Component to display
 * or render a dropdown for other functionalities
 */

//! Icon
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { GoCircleSlash } from "react-icons/go";

const ButtonTwo = ({ color }) => {
	return (
		<>
			<div className='dropdown dropdown-end'>
				<div tabIndex={0} role='button'>
					<div className='indicator'>
						<button
							className='text-white rounded-sm text-base py-1 px-2 flex items-center justify-center  gap-1'
							style={{ background: `${color}` }}
						>
							Actions <MdKeyboardArrowDown className='text-base' />
						</button>
					</div>
				</div>
				<div
					tabIndex={0}
					className='mt-1 z-[10] card card-compact dropdown-content w-48 bg-base-100 shadow-neutral-400 shadow-xl'
				>
					<div className='card-body'>
						<p className='text-lg cursor-pointer flex gap-2 items-center text-neutral-400 py-2'>
							<FaRegTrashAlt />
							Delete
						</p>
						<p className='text-lg cursor-pointer flex gap-2 items-center text-neutral-400 py-2'>
							<GoCircleSlash />
							Calcel
						</p>
						<p className='text-lg cursor-pointer flex gap-2 items-center text-neutral-400 py-2'>
							<FaRegClock />
							Psotpone
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ButtonTwo;
