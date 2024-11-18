import { professorsList } from "../../Data/Data";

/**
 * Component: ProfessorsList
 * Description: This is the list of all the professors in the system,
 * this component is responsible for displaying all the professor's information
 * like name,avatar,status,email etc.
 */
const ProfessorsList = () => {
	return (
		<>
			<div className='flex-1 bg-white h-fit rounded-md py-4 '>
				<h1 className='text-xl font-bold border-b-2 border-dotted pb-3 pl-8'>
					Professors List
				</h1>
				{/* Use the map function to loop through all the professors from the data */}
				{professorsList.map((data) => (
					<div className='flex px-5 py-4 gap-6' key={data.id}>
						<div className='avatar'>
							<div className='w-12 h-12 rounded-full'>
								{/* Set the source of the avatar image */}
								<img src={data.avatar} />
							</div>
						</div>
						<div>
							<h1 className='text-base'>{data.name}</h1>
							<p style={{ color: `${data.color}` }} className='text-sm'>
								{/* Display the status of the professor */}
								{data.status}
							</p>
						</div>
						<div className=''></div>
					</div>
				))}
			</div>
		</>
	);
};

export default ProfessorsList;
