import { Pie } from "react-chartjs-2";
import { pieChartData } from "../../../Data/Data";

import {
	Chart as chartjs,
	ArcElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

chartjs.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend
);

/**
 * PieChart Component
 * This is a Component that renders a Pie Chart using react-chartjs-2 library
 * This Component uses chart.js as the core library for rendering charts
 * @returns {JSX.Element} PieChart Component
 */
const PieChart = () => {
	/**
	 * options for the Pie chart
	 * the options object is used to define the properties of the chart
	 * in this case we are defining responsive, maintainAspectRatio for the chart
	 */
	const options = {
		responsive: true,
		maintainAspectRatio: false,
	};

	/**
	 * This PieChart component is a component from react-chartjs-2 library
	 * it takes in the options and data as props, the data is imported from ../../Data/Data.js
	 */
	return (
		<>
			<div
				className='w-full h-full md:flex-1 rounded-md shadow-2xl  bg-white overflow-hidden'
				data-testid='pie-chart'
			>
				<Pie data={pieChartData} options={options} />
			</div>
		</>
	);
};

export default PieChart;
