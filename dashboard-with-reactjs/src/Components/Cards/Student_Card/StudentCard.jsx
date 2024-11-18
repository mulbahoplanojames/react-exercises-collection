import { Link } from "react-router-dom";

/**
 * This is a functional component that renders a single card on the students list page.
 * @param {string} props.avatar - This is the url of the student's avatar
 * @param {string} props.name - This is the name of the student
 * @param {string} props.subject - This is the subject that the student
 *  teaches
 * @param {string} props.location - This is the location of the student
 * @param {string} props.city - This is the city in which the student resides
 * @param {string} props.contact - This is the contact number of the student
 */
const StudentCard = (props) => {
	// Destructuring the properties passed from parent component
	const { avatar, name, subject, location, city, contact } = props;

	// Rendering a single card using the passed properties
	return (
		<>
			<div className='w-[320px] h-fit bg-white text-center shadow-2xl  rounded-md py-4 px-6 '>
				<div className='avatar'>
					<div className='w-24 rounded-full ring ring-neutral-500 ring-offset-2 ring-offset-neutral-500'>
						<img src={avatar} alt={avatar} />
					</div>
				</div>
				<h1 className='text-2xl font-bold p-2'>{name}</h1>
				<p className='pb-1'>{subject}</p>
				<p className='pb-1'>{location}</p>
				<p className='pb-4'>{city}</p>
				<p className='pb-3'>{contact}</p>
				<Link to={"/"}>
					<button className='py-1 px-4 rounded-full bg-[#e91e63] text-white shadow-md'>
						Read More
					</button>
				</Link>
			</div>
		</>
	);
};

export default StudentCard;
