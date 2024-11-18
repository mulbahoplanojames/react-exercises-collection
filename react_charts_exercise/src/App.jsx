import { Doughnut } from "react-chartjs-2";
import BarChart from "./Components/Bar Chart/BarChart";
import LineChart from "./Components/Line Chart/LineChart";
import PieChart from "./Components/PieChart/PieChart";

const App = () => {
	return (
		<>
			<div className='flex justify-center items-center flex-wrap gap-10  h-[100vh]'>
				<LineChart />
				<BarChart />
				<PieChart />
				<Doughnut />
			</div>
		</>
	);
};

export default App;
