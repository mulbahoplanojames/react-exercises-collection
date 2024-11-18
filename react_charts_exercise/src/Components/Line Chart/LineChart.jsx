import { Line } from "react-chartjs-2";
import lineData from "../../Data/Data";

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

const LineChart = () => {
	const options = { responsive: true, maintainAspectRatio: false };

	return (
		<>
			<div className='w-[400px] h-[300px] rounded-md shadow-2xl border-2 border-red-600 overflow-hidden'>
				<Line options={options} data={lineData} />
			</div>
		</>
	);
};

export default LineChart;
