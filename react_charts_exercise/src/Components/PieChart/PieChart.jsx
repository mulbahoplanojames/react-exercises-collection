import { Pie } from "react-chartjs-2";
import { pieData } from "../../Data/Data";

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

const PieChart = () => {
	const options = { responsive: true, maintainAspectRatio: false };

	return (
		<>
			<div className='w-[400px] h-[300px] rounded-md shadow-2xl border-2 border-red-600 overflow-hidden'>
				<Pie data={pieData} options={options} />
			</div>
		</>
	);
};

export default PieChart;
