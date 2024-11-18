/*
 * ===========================================================================================
 * This component TableRow is use with in the TeachersTableOne omponent to display
 * or render Teachers Datas obtain form the Data component  in side of the table role.
 */

const TableRow = (props) => {
	const { avatar, name, department, email, classname, subject, rating } = props;

	return (
		<>
			<tr className='hover:bg-slate-200'>
				<td>
					<div className='avatar'>
						<div className='mask mask-squircle w-10 h-10'>
							<img src={avatar} alt={avatar} />
						</div>
					</div>
				</td>
				<td>
					<div>
						<p className='text-base'>{name}</p>
					</div>
				</td>
				<td>
					<span className='text-base'>{department}</span>
				</td>
				<td>
					<p className='text-base'>{email}</p>
				</td>
				<td>
					<p className='text-base'>{classname}</p>
				</td>
				<td>
					<p className='text-base'>{subject}</p>
				</td>
				<td>
					<p className='text-base'>{rating}</p>
				</td>
			</tr>
		</>
	);
};

export default TableRow;
