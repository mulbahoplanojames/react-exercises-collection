import { newStudentstableDataOne } from "../../../Data/Data";
import TableRowTwo from "../../Table_Rows/TableRowTwo";

/*
 * NewStudentTableOne component
 * The component that displays all the New Students Informations in a tabular form
 * @returns {<React.Fragment>} Returns the NewStudentTableOne component
 */
const NewStudentTableOne = () => {
	return (
		<>
			<div className='overflow-x-auto flex-1 bg-white rounded-2xl'>
				<p className='px-6 py-3 text-2xl border-dotted border-b-4'>
					New Students List
				</p>
				<table className='table'>
					{/* head */}
					<thead className='text-lg'>
						<tr>
							<th>No</th>
							<th>Name</th>
							<th>Assigned Professor</th>
							<th>Date Of Admit</th>
							<th>Fees</th>
							<th>Branch</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{/* Map through newStudentstableDataOne array */}
						{newStudentstableDataOne.map((data) => (
							<TableRowTwo
								// Pass unique key prop to each TableRowTwo
								key={data.id}
								// Pass props to TableRowTwo component
								number={data.number}
								name={data.name}
								assignedprofessor={data.assignedprofessor}
								dateofadmit={data.dateofadmit}
								fees={data.fees}
								branch={data.brance}
							/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default NewStudentTableOne;
