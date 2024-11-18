/*
 * ===========================================================================================
 * This component Card One is use with in the Dashboard One Cards Wripper component to display
 * or render a card layout
 */

/**
 * @function CardThree
 * @description This is a functional component that is used to render a card layout
 * @param {Object} props Properties of the component
 * @param {string} props.label The label of the card
 * @param {string} props.number The number to be displayed in the card
 * @param {string} props.percentage The percentage to be displayed in the card
 * @param {string} props.icon The icon to be displayed in the card
 * @param {string} props.color The color of the card
 * @param {number} props.value The value of the progress bar
 * @returns {ReactElement} CardThree component
 */
const CardThree = (props) => {
	// Object Destructing of props
	const { label, number, percentage, icon, color, value } = props;

	return (
		<>
			<div className='w-[240px] h-fit py-5 px-3 bg-white shadow-xl rounded-lg flex items-center gap-4'>
				<div
					className='w-14 h-14 rounded-full  font-extrabold  flex justify-center items-center'
					style={{ background: `${color}` }}
				>
					{icon}
				</div>
				<div className='text-white'>
					<p className='text-xl text-black  pb-2'>{label}</p>
					<p className='text-2xl text-green-600 pb-2'>{number}</p>
					<progress
						className='progress w-32'
						style={{ background: `${color}` }}
						value={value}
						max='100'
					></progress>

					<p className='text-xl text-black'>{percentage}</p>
				</div>
			</div>
		</>
	);
};

export default CardThree;
