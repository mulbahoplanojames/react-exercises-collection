import { Line } from "react-chartjs-2";
import { lineChartData } from "../../../Data/Data";

import {
	Chart as chartjs,
	LineController,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

chartjs.register(
	LineController,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend
);

/*
 * LineChart component
 * This is a Component that renders a line chart using react-chartjs-2 library
 * This Component uses chart.js as the core library for rendering charts
 * The component is responsible for rendering a line chart
 */
const LineChart = () => {
	/*
	 * options for the line chart
	 * the options object is used to define the properties of the chart
	 * in this case we are defining responsive, maintainAspectRatio for the chart
	 */
	const options = { responsive: true, maintainAspectRatio: false };

	/*
	 * this LineChart component is a component from react-chartjs-2 library
	 * it takes in the options and data as props
	 * the data is imported from ../../Data/Data.js
	 */
	return (
		<>
			<div className='w-full h-full rounded-xl shadow-2xl  bg-white overflow-hidden'>
				<Line options={options} data={lineChartData} />
			</div>
		</>
	);
};

export default LineChart;
