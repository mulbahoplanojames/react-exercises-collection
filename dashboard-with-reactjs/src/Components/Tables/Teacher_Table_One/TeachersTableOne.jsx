/*
 * ===========================================================================================
 * This component TeachersTableOne is use with in the Dashboard One omponent to display
 * or render Teachers Informations or details in a tabular form
 */

import TableRow from "../../Table_Rows/TableRow";
import { teachersDataOne } from "../../../Data/Data";

/*
 * TeachersTableOne component
 * The component that displays teachers information in a tabular form.
 */
const TeachersTableOne = () => {
	// Return table component
	return (
		<>
			<div className='overflow-x-auto flex-1 bg-white rounded-2xl'>
				<p className='px-6 py-3 text-2xl border-dotted border-b-4'>
					Teacher List
				</p>
				<table className='table'>
					{/* head */}
					<thead className='text-lg'>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Department</th>
							<th>Email</th>
							<th>Class Name</th>
							<th>Subject</th>
							<th>Rating</th>
						</tr>
					</thead>
					<tbody>
						{/* row */}

						{/* Map through teachersDataOne array */}
						{teachersDataOne.map((data) => (
							<TableRow
								// Pass unique key prop to each TableRow
								key={data.id}
								// Pass props to TableRow component
								avatar={data.avater}
								name={data.name}
								department={data.department}
								email={data.email}
								classname={data.classname}
								subject={data.subject}
								rating={data.rating}
							/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TeachersTableOne;
