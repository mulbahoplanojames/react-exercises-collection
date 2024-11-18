import { useState } from "react";

const EditCourseForm = () => {
	const [courseName, setCourseName] = useState("Computer Science");
	const [courseCode, setCourseCode] = useState("CS101");
	const [courseLength, setCourseLength] = useState("2 Months");
	const [startDate, setStartDate] = useState("12/12/2022");
	const [price, setPrice] = useState("$200");
	const [professorName, setProfessorName] = useState("John Doe");
	const [courseDetails, setCourseDetails] = useState(
		"This course is about web development and mobile app development"
	);

	return (
		<section className='h-fit w-full pb-10 bg-white rounded-md shadow-md'>
			<h1 className=' px-5 py-2 text-lg font-semibold border-b-[2px] border-gray-400 border-dotted'>
				Course Details
			</h1>
			<div className=' px-5 py-6'>
				<CourseName_Code
					courseName={courseName}
					setCourseName={setCourseName}
					courseCode={courseCode}
					setCourseCode={setCourseCode}
				/>
				<CourseDetails
					CourseDetails={courseDetails}
					setCourseDetails={setCourseDetails}
				/>
				<CourseLength_StartDate
					courseLength={courseLength}
					setCourseLength={setCourseLength}
					startDate={startDate}
					setStartDate={setStartDate}
				/>
				<CoursePrice_ProfessorName
					coursePrice={price}
					setCoursePrice={setPrice}
					professorName={professorName}
					setProfessorName={setProfessorName}
				/>
			</div>
			{/* Buttons to submit and cancel the form */}
			<div className='pl-[24rem] '>
				<button className='tw_btn mr-8 bg-blue-500'>Submit</button>
				<button className='tw_btn bg-red-500'>Cancel</button>
			</div>
		</section>
	);
};

/**
 * Component for the First Name and Last Name input fields
 */
const CourseName_Code = ({
	courseName,
	setCourseName,
	courseCode,
	setCourseCode,
}) => {
	return (
		<div className=' px-5 py-10'>
			<div className='gap-x-8 grid grid-cols-2'>
				{/* First Name input field */}
				<input
					type='text'
					value={courseName}
					onChange={(e) => setCourseName(e.target.value)}
					placeholder='Course Name'
					className='border-b-[2px] inline-block w-full py-2 mr-5 outline-none focus:border-blue-500'
				/>
				{/* Last Name input field */}
				<input
					type='text'
					placeholder='Course Code'
					value={courseCode}
					onChange={(e) => setCourseCode(e.target.value)}
					className=' w-full py-2 border-b-[2px] outline-none focus:border-blue-500 '
				/>
			</div>
		</div>
	);
};

const CourseDetails = ({ CourseDetails, setCourseDetails }) => {
	return (
		<div className=' px-5 pb-4'>
			<input
				type='text'
				value={CourseDetails}
				onChange={(e) => setCourseDetails(e.target.value)}
				placeholder='Course Details'
				className='inline-block w-full py-6 border-b-[2px] outline-none focus:border-blue-500'
			/>
		</div>
	);
};

const CourseLength_StartDate = ({
	courseLength,
	setCourseLength,
	startDate,
	setStartDate,
}) => {
	return (
		<div className=' px-5 py-10'>
			<div className='gap-x-8 grid grid-cols-2'>
				<input
					type='text'
					required
					name='startDate'
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
					id='startDate'
					onFocus={(e) => (e.target.type = "date")}
					placeholder='Start From'
					className='inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500'
				/>

				<input
					type='text'
					required
					name='timelength'
					value={courseLength}
					onChange={(e) => setCourseLength(e.target.value)}
					id='timelength'
					placeholder='Course Time Length'
					className='inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500'
				/>
			</div>
		</div>
	);
};

const CoursePrice_ProfessorName = ({
	coursePrice,
	setCoursePrice,
	professorName,
	setProfessorName,
}) => {
	return (
		<div className=' px-5 py-10'>
			<div className='gap-x-8 grid grid-cols-2'>
				<select
					name='class'
					id='class'
					value={professorName}
					onChange={(e) => setProfessorName(e.target.value)}
					className='inline-block w-full py-2 mr-5 bg-transparent border-b-[2px] outline-none focus:border-blue-500'
				>
					<option value='class' disabled selected hidden>
						Professor Name
					</option>
					<option value='male'>Pr. Oplano Jame Mulbah</option>
					<option value='female'>Finance</option>
					<option value='other'>Pr. WIlma Williams</option>
					<option value='other'>Pr. Robert Johnson</option>
					<option value='other'>Pr. Abdalla Ahmed</option>
				</select>
				<input
					type='text'
					placeholder='Course Price'
					className=' w-full py-2 border-b-[2px] outline-none focus:border-blue-500'
					value={coursePrice}
					onChange={(e) => setCoursePrice(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default EditCourseForm;
