import BarChart from "../../../Components/Charts/Bar_Chart/Barchart";
import LineChart from "../../../Components/Charts/Line_Chart/LineChart";
import DashboardOneCardsWripper from "../../../Components/Dashboard_1_Card_Wripper/DashboardOneCardsWripper";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import NewStudentTableOne from "../../../Components/Tables/NewStudents_Table_One/NewStudentsTableOne";
import TeachersTableOne from "../../../Components/Tables/Teacher_Table_One/TeachersTableOne";

/*
 * Added BarChart component,  Added Student Performance section,
 * Updated TeachersTableOne component, Added NewStudentTableOne component
 */

/*
 * This component DashboardOne is use with in the Dashboard One page
 * to display or render Dashboard One page components
 */
const DashboardOne = () => {
	return (
		<section className='py-10 md:px-5 px-3 bg-1 '>
			{/* Dashboard HeaderTitle and a link to to go back to the home page  */}
			<DashboardOneHeader />
			{/* // DashboardOneCardsWripper component */}
			<DashboardOneCardsWripper />
			{/* This is a container for LineChart and BarChart components */}
			<div className='flex items-center flex-wrap gap-8 mb-14'>
				{/* This is a container for LineChart component */}
				<div className='w-[450px] h-[530px]'>
					<LineChart />
				</div>
				{/* This is a container for BarChart component */}
				<div className='w-[520px] h-[530px] '>
					<BarChart />
				</div>{" "}
			</div>
			{/* This is a container for TeachersTableOne and BarChart components */}
			<div className='flex gap-6 flex-wrap mb-14'>
				{/* This is a container for TeachersTableOne component */}
				<TeachersTableOne />
				{/* This is a container for BarChart component and Student Performance section */}
				<div className='w-52 h-[540px] bg-white shadow-lg rounded-lg p-6 overflow-hidden'>
					<p className='text-2xl font-bold pb-5'>Student Performance</p>
					<p className='text-lg pb-2'> Overall Growth</p>
					<p className='text-lg font-bold'>38.80%</p>
					{/* This is a container for BarChart component */}
					<div className='overflow-hidden object-cover h-80 '>
						<BarChart />
					</div>
				</div>
			</div>
			{/* // New Students Table  */}
			<NewStudentTableOne />
		</section>
	);
};

export default DashboardOne;
