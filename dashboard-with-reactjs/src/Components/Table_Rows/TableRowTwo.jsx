/*
 * ===========================================================================================
 * This component TableRwoTwo is use with in the NewStudentsTableOne component to display
 * or render New Students Datas obtain form the Data component in side of the table role.
 */

const TableRowTwo = (props) => {
	const { number, name, assignedprofessor, dateofadmit, fees, branch } = props;

	return (
		<>
			<tr className='hover:bg-slate-200'>
				<td>
					<p className='text-base'>{number}</p>
				</td>
				<td>
					<div>
						<p className='text-base'>{name}</p>
					</div>
				</td>
				<td>
					<span className='text-base'>{assignedprofessor}</span>
				</td>
				<td>
					<p className='text-base'>{dateofadmit}</p>
				</td>
				<td>
					<p className='text-base'>{fees}</p>
				</td>
				<td>
					<p className='text-base'>{branch}</p>
				</td>
			</tr>
		</>
	);
};

export default TableRowTwo;
