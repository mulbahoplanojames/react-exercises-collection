/*
 * ===========================================================================================
 * This component DashboardThreeCardsWripper is use with in the Dashboard One omponent to display
 * or render multiple cards layout in a flex or gird layout
 */

import cardOneData from "../../Constants/Constants";
import CardThree from "../Cards/Card_Three/CardThree";

/**
 * @function DashboardThreeCardsWripper
 * @description This is a functional component that is use with in the DashboardThree
 * component to display or render multiple cards layout in a gird layout
 * @returns {ReactElement} DashboardThreeCardsWripper component
 */
const DashboardThreeCardsWripper = () => {
	return (
		<>
			<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-x-4 gap-y-6 place-items-center mb-10'>
				{/* Map over the cardOneData array and return a CardThree component
				for each item in the array */}
				{cardOneData.map((item) => (
					<CardThree
						// Set the key of the CardThree component to the item id
						key={item.id}
						// Pass the item label, number, percentage, color, value and icon as props to the CardThree component
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

export default DashboardThreeCardsWripper;
