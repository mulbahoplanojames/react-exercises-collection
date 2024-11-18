/*
 * ===========================================================================================
 * This component Card One is use with in the Dashboard One Cards Wripper component to display
 * or render a card layout
 */

const CardOne = (props) => {
	// Object Destructing of props
	const { label, number, percentage, icon, color, value } = props;

	return (
		<>
			<div
				className='w-[240px] h-fit py-5 px-3 bg-blue-400 rounded-lg flex items-center gap-4'
				style={{ background: `${color}` }}
			>
				<div className='w-14 h-14 rounded-full bg-gradient-to-r from-slate-200 text-white font-extrabold  flex justify-center items-center'>
					{icon}
				</div>
				<div className='text-white'>
					<p className='text-xl  pb-2'>{label}</p>
					<p className='text-2xl pb-2'>{number}</p>
					<progress
						className='progress w-32'
						value={value}
						max='100'
					></progress>

					<p className='text-xl'>{percentage}</p>
				</div>
			</div>
		</>
	);
};

export default CardOne;
