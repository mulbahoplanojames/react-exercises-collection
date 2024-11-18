import { Link } from "react-router-dom";

// This component is responsible for rendering a button that
// when clicked redirects the user to the list view of the students
const ListViewButton = () => {
	// the link tag from react router is used to create a link to the list view
	// with the 'to' prop we specify the path to the list view component
	return (
		<>
			<Link to='/allstudents'>
				<button className='text-xl focus:bg-[#6673fc] shadow-lg py-2 px-4 focus:text-white rounded-full '>
					{/* the text inside the button */}
					List View
				</button>
			</Link>
		</>
	);
};

export default ListViewButton;
