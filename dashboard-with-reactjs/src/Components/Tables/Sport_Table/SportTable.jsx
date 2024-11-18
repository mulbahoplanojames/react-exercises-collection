import { Link } from "react-router-dom";
import { studentSportData } from "../../../Data/Data";
import Checkbox from "../../CheckBox/Checkbox";
import TableRowThree from "../../Table_Rows/TableRowThree";
import ButtonOne from "../../../Interfaces/Button_One/ButtonOne";

/**
 * Component for Student Sport Table, this component is used with in the Dashboard Two component
 * to display or render Student Sport Informations or details in a tabular form and with the
 * help of the ButtonOne component. @returns {JSX.Element}
 * @returns {JSX.Element}
 */

const SportTable = () => {
	return (
		// !Container div
		<>
			<div className='overflow-x-auto bg-white w-[700px] rounded-xl overflow-y-clip h-fit'>
				<p className='px-6 py-3 text-2xl border-dotted border-b-4'>
					Student Sport List
				</p>

				{/* // !Buttons  */}
				<div className='flex justify-between px-6 py-4'>
					<Link to=''>
						<button className='bg-blue-400 text-white rounded-sm text-base py-1 px-4'>
							Add New<span className='pl-2'>+</span>
						</button>
					</Link>
					<ButtonOne />
				</div>

				{/* //! Table and Table Data  */}
				<table className='table bg-white border'>
					{/* head */}
					<thead>
						<tr className='text-base font-bold'>
							<th>
								<Checkbox />
							</th>
							<th>Student Name</th>
							<th>Assigned Coach</th>
							<th>Date</th>
							<th>Time</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{studentSportData.map((data) => (
							<TableRowThree
								key={data.id}
								studentname={data.Studentname}
								assigncoach={data.AssignedCoach}
								data={data.Date}
								time={data.Time}
								action={data.Actions}
							/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default SportTable;
