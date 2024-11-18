import Messages from "./Messages/Messages";
import UserAvatar from "./Navbar_UserAvatar/UserAvatar";
import Notifications from "./Notifications/Notifications";

const Navbar = () => {
	return (
		<>
			<nav className='bg-white flex justify-between shadow-xl py-2 md:px-8 px-2 fixed top-0 right-2 z-20 sm:w-[81%] md:w-[78%] lg:w-[81.7%] w-full '>
				{/* // Search input field  */}
				<div className='form-control'>
					<input
						type='text'
						placeholder='Search'
						className='input input-bordered w-20 md:w-auto'
					/>
				</div>

				{/* // Right links for the navigation contain the avatar and other components */}
				<div className='flex gap-4 relative'>
					<Notifications />
					<Messages />
					<UserAvatar />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
