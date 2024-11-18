import { Link } from "react-router-dom";

/**
 * ============================================================================
 * This component GridViewButton is used with in the AllStudents component to render
 * a button that links to the '/gridview' route to display the grid view of the students.
 */
const GridViewButton = () => {
	return (
		<>
			<Link to='gridview'>
				<button className='text-xl focus:bg-[#6673fc] shadow-lg py-2 px-4 focus:text-white rounded-full '>
					Grid View
				</button>
			</Link>
		</>
	);
};

export default GridViewButton;
