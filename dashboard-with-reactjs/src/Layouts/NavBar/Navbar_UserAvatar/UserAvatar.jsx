/*
 * ==========================================================================
 * This component UserAvatar is used with in the Navbar component to
 * render the some of the user details like the avatar, profile, settings and logout
 */

import avatar from "/src/assets/illu1.jpg";

import { Link } from "react-router-dom";

const UserAvatar = () => {
	return (
		<>
			<div className='dropdown dropdown-end'>
				<div
					tabIndex={0}
					role='button'
					className='btn btn-ghost btn-circle avatar'
				>
					<div className='w-10 rounded-full'>
						<img alt='User avatar' src={avatar} />
					</div>
				</div>
				{/* // user details info like Profile, Setting and LogOut  */}
				<ul
					tabIndex={0}
					className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
				>
					<li>
						<Link to={"edituserprofile"} className='justify-between'>
							Profile
							<span className='badge'>New</span>
						</Link>
					</li>
					<li>
						<Link to={"/"}>Settings</Link>
					</li>
					<li>
						<Link to={"/"}>Logout</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default UserAvatar;
