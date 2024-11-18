/*
 * ===========================================================================================
 * This component DashboardOneCardsWripper is use with in the Dashboard One omponent to display
 * or render multiple cards layout in a flex or gird layout
 */

import CardOne from "../Cards/Card_One/CardOne";
import cardOneData from "../../Constants/Constants";

/**
 * @function DashboardOneCardsWripper
 * @description This is a functional component that is used with in the DashboardOne
 * component to display or render multiple cards layout in a flex or gird layout
 */
const DashboardOneCardsWripper = () => {
	return (
		<>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-x-4 gap-y-6 place-items-center mb-10'>
				{/* Map over the cardOneData array and return a CardOne component
				for each item in the array */}
				{cardOneData.map((item) => (
					<CardOne
						key={item.id}
						// Pass the item label, number, percentage,
						// color, value and icon as props to the CardOne component
						label={item.label}
						number={item.number}
						percentage={item.percentage}
						color={item.color}
						value={item.value}
						icon={item.icon}
					/>
				))}
			</div>
		</>
	);
};

export default DashboardOneCardsWripper;
