import StudentCard from "../../../../Components/Cards/Student_Card/StudentCard";
import { allStudentsGridViewData } from "../../../../Constants/Constants";

/*
 * This is the GridView functional component, It is responsible for displaying a grid of student cards
 * It maps over the allStudentsGridViewData array to display a student card component for each item in the array
 */
const GridView = () => {
	return (
		<div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6'>
			{allStudentsGridViewData.map(
				// Map over the allStudentsGridViewData array
				(item) => (
					// Return a StudentCard component for each item in the array
					<StudentCard
						// Pass the item id as a key prop
						key={item.id}
						// Pass the item avatar, name, subject, location,
						// city and contact as props to the StudentCard component
						avatar={item.avatar}
						name={item.name}
						subject={item.subject}
						location={item.location}
						city={item.city}
						contact={item.contact}
					/>
				)
			)}
		</div>
	);
};

export default GridView;
