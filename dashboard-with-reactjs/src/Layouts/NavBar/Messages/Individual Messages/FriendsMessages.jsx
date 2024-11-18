/*
 * ===============================================================================
 * This component is used with in the Messages
 * component to render all messages obtain from friends
 * ===============================================================================
 */
const FriendsMessages = ({ name, message, time, avatar }) => {
	return (
		<>
			<div className='flex items-center gap-4 px-2 mb-3 cursor-pointer hover:bg-neutral-100'>
				<div className='avatar online'>
					<div className='w-10 rounded-full'>
						<img src={avatar} className='w-10 rounded-full' />
					</div>
				</div>
				<div className='relative w-full mb-4'>
					<p className='text-blue-500 font-bold'>{name}</p>
					<p>{message}</p>
					<p className='absolute top-2 right-1'>{time}</p>
				</div>
			</div>
		</>
	);
};

export default FriendsMessages;
