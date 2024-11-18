import { Doughnut } from "react-chartjs-2";
import { doughNutData } from "../../Data/Data";

import { Chart as chartjs, ArcElement, Title, Tooltip, Legend } from "chart.js";

chartjs.register(ArcElement, Title, Tooltip, Legend);

const DoughnutChart = () => {
	const options = { responsive: true, maintainAspectRatio: false };

	return (
		<>
			<div className='w-[400px] h-[300px] rounded-md shadow-2xl border-2 border-red-600 overflow-hidden'>
				<Doughnut data={doughNutData} options={options} />
			</div>
		</>
	);
};

export default DoughnutChart;
