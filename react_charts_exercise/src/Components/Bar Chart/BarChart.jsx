import { Bar } from "react-chartjs-2";
import { barData } from "../../Data/Data";

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

const BarChart = () => {
	const oprions = { responsive: true, maintainAspectRatio: false };

	return (
		<>
			<div className='w-[400px] h-[300px] rounded-md shadow-2xl border-2 border-red-600 overflow-hidden'>
				<Bar data={barData} options={oprions} />
			</div>
		</>
	);
};

export default BarChart;
