import BarChart from "../../../Components/Charts/Bar_Chart/Barchart";
import LineChart from "../../../Components/Charts/Line_Chart/LineChart";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import DashboardThreeCardsWripper from "../../../Components/Dashboard_3_card_Wripper/DashboardThreeCardsWripper";
import NewStudentTableOne from "../../../Components/Tables/NewStudents_Table_One/NewStudentsTableOne";

/**
 * @function DashboardThree
 * @description This is a functional component that renders the Dashboard Three page
 * @returns {ReactElement} DashboardThree Component
 */
const DashboardThree = () => {
	return (
		<div className='py-10 md:px-5 px-3 bg-1'>
			{/* This is the Dashboard One Header component */}
			<DashboardOneHeader />
			{/* This is the Dashboard Three Cards Wripper component */}
			<DashboardThreeCardsWripper />
			{/* This is the main flex container for the charts */}
			<div className='flex items-center flex-wrap lg:gap-8 gap-6 mb-14'>
				{/* This is the container for the line chart */}
				<div className='w-[480px] h-[530px]'>
					{/* This is the Line Chart component */}
					<LineChart />
				</div>
				{/* This is the container for the bar chart */}
				<div className='w-[520px] h-[530px]'>
					{/* This is the Bar Chart component */}
					<BarChart />
				</div>
			</div>
			{/* This is the New Students Table One component */}
			<NewStudentTableOne />
		</div>
	);
};

export default DashboardThree;
