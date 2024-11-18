/*
 * ===========================================================================================
 * This component TableRow is use with in the TeachersTableOne Component to display
 * or render Teachers Datas obtain form the Data component  in side of the table role.
 */

import Checkbox from "../CheckBox/Checkbox";

const TableRowThree = (props) => {
	const { studentname, assigncoach, data, time, action } = props;

	return (
		<>
			<tr className='hover:bg-slate-200'>
				<td>
					<Checkbox />
				</td>
				<td>
					<p>{studentname}</p>
				</td>
				<td>
					<p className='text-base'>{assigncoach}</p>
				</td>
				<td>
					<span className='text-base'>{data}</span>
				</td>
				<td>
					<p className='text-base'>{time}</p>
				</td>
				<td>
					<p className='text-base'>{action}</p>
				</td>
			</tr>
		</>
	);
};

export default TableRowThree;
