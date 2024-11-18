/*
 * This component UserMini Profiles is used with in the Sidebar component
 * to render the user image/avatar, positiona and name with in the sidebar
 */

import avatar from "/src/assets/illu1.jpg";

const UserMiniProfie = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center pb-8'>
				{/* // User Image / Avatar  */}
				<div className='w-[130px] h-[90px] bg-neutral-700 rounded-lg  mb-2 overflow-hidden'>
					<img src={avatar} alt='' className='w-full h-full object-cover' />
				</div>

				{/* // User Position and Name  */}
				<p className='text-base pb-1'>Richard Jutomue Mulbah</p>
				<p className=''>Administrator</p>
			</div>
		</>
	);
};

export default UserMiniProfie;
