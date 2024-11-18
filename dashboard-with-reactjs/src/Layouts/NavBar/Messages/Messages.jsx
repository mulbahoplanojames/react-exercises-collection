import { AiOutlineMessage } from "react-icons/ai";
import FriendsMessages from "./Individual Messages/FriendsMessages";
import { FriendMessagesData } from "../../../Constants/Constants";

/*
 * Messages that are recieve from friends in the messages navigation bar
 * This component Messages is used with in the Navbar component to render
 *  all messages obtain from friends when you click on the messages icon
 */

const Messages = () => {
	return (
		<>
			{/* // main icon for dropdown when click upon */}
			<div className='flex-none'>
				<div className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
						<div className='indicator'>
							<AiOutlineMessage className='h-6 w-6' />
							<span className='badge badge-sm indicator-item w-5 h-5 bg-blue-500 text-white'>
								5
							</span>
						</div>
					</div>
					<div
						tabIndex={0}
						className='mt-4 z-30 card card-compact dropdown-content w-[350px] bg-base-100 shadow'
					>
						<div className='w-full h-80 z-40 overflow-y-scroll'>
							{/* // Notification for incoming messages  */}
							<div className='font-bold text-lg bg-neutral-400 flex justify-between items-center py-2 px-3 mb-4'>
								<p className='text-xl uppercase'>Messages</p>
								<button className='bg-blue-500 py-1 p-2 rounded-md text-white'>
									New 5
								</button>
							</div>
							{/* // Avatar and messages recieve from friends */}
							{FriendMessagesData.map((message) => (
								<FriendsMessages
									key={message.id}
									name={message.name}
									message={message.message}
									time={message.time}
									avatar={message.avater}
								/>
							))}

							<div className='card-actions'>
								<p className='bg-neutral-300 w-full py-2 text-center'>
									All Messages
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Messages;
