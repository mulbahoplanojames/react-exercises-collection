import { cardTwoData } from "../../Constants/Constants";
import CardTwo from "../Cards/Card_Two/CardTwo";

/**
 * @function DaschoardTwoCardWripper
 * @description This is a functional component that is use with in the Dashboard Two component
 * to display or render multiple cards layout in a gird layout
 */
const DaschoardTwoCardWripper = () => {
	return (
		<>
			<div className='flex flex-wrap w-[45%] items-center  gap-x-6 gap-y-10 px-1'>
				{/* Map over the cardTwoData array and return a CardTwo component
				for each item in the array */}
				{cardTwoData.map((data) => (
					<CardTwo
						// Unique key for each card component
						key={data.icon}
						// Card label
						label={data.label}
						// Card number
						number={data.number}
						// Card percentage
						percentage={data.percentage}
						// Card icon
						icon={data.icon}
						// Card className
						className='text-4xl'
					/>
				))}
			</div>
		</>
	);
};

export default DaschoardTwoCardWripper;
