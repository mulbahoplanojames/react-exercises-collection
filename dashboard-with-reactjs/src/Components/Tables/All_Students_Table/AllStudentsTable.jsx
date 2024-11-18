import { Link } from "react-router-dom";
import { allStudentsTableData } from "../../../Constants/Constants";
import AllStudentsTableRow from "../../Table_Rows/AllStudentsTableRow";

/**
 * @description This is a component for All Students Table, this component is used with in
 * the All Studen component to display or render All Students Informations or details in
 * a tabular form.
 * @returns {JSX.Element}
 */
const AllStudentsTable = () => {
	return (
		// !Container div
		<>
			<div className='overflow-x-auto bg-white w-full rounded-xl overflow-y-clip h-fit'>
				<p className='px-6 py-3 text-lg font-bold border-dotted border-b-4'>
					All Students List
				</p>

				{/* // !Buttons  */}
				<div className=' px-6 py-4'>
					<Link to=''>
						<button className='bg-blue-400 text-white rounded-sm text-base py-1 px-4'>
							Add New<span className='pl-2'>+</span>
						</button>
					</Link>
				</div>

				{/* //! Table and Table Data  */}
				<table className='table bg-white border text-center'>
					{/* head */}
					<thead>
						<tr className='text-base font-bold border'>
							<th></th>
							<th>Roll No</th>
							<th>Name</th>
							<th>Department</th>
							<th>Mobile Details</th>
							<th>Email</th>
							<th>Admission Date</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{allStudentsTableData.map((data) => (
							<AllStudentsTableRow
								// , name, , email, mobile, rollnumber, rating, admissiondate, acion
								key={data.id}
								avatar={data.avatar}
								rollnumber={data.rollnumber}
								studentname={data.name}
								department={data.department}
								mobile={data.mobile}
								email={data.email}
								admissiondate={data.admissiondate}
								action={data.action}
							/>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default AllStudentsTable;
