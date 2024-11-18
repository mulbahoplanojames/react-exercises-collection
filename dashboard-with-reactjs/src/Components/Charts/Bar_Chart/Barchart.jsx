import { Bar } from "react-chartjs-2";
import { barChartData } from "../../../Data/Data";

import {
	Chart as chartjs,
	BarElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

chartjs.register(
	BarElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend
);

/*
 * BarChart Component
 * This is a Component that renders a Bar Chart using react-chartjs-2 library
 * This Component uses chart.js as the core library for rendering charts
 * @returns {JSX.Element} BarChart Component
 */
const BarChart = () => {
	/*
	 * options for the Bar chart
	 * the options object is used to define the properties of the chart
	 * in this case we are defining responsive, maintainAspectRatio for the chart
	 */
	const oprions = {
		responsive: true,
		maintainAspectRatio: false,
	};

	/*
	 * This BarChart component is a component from react-chartjs-2 library
	 * it takes in the options and data as props
	 * the data is imported from ../../Data/Data.js
	 */
	return (
		<>
			<div
				className='w-full h-full rounded-xl shadow-2xl bg-white overflow-hidden'
				data-testid='bar-chart'
			>
				<Bar data={barChartData} options={oprions} />
			</div>
		</>
	);
};

export default BarChart;
