//Component for the Add Students Form page
const AddCourseForm = () => {
	return (
		<section className='h-fit w-full pb-10 bg-white rounded-md shadow-md'>
			{/* Header with the form title */}
			<h1 className=' px-5 py-2 text-lg font-semibold border-b-[2px] border-gray-400 border-dotted'>
				Course Details
			</h1>
			{/* Main form content */}
			<div className=' px-5 py-6'>
				<CourseNames />
				<CourseDetails />
				<CourseLength_StartDate />
				<CoursePrice_ProfessorName />
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
const CourseNames = () => {
	return (
		<div className=' px-5 py-10'>
			<div className='gap-x-8 grid grid-cols-2'>
				{/* First Name input field */}
				<input
					type='text'
					placeholder='Course Name'
					className='border-b-[2px] inline-block w-full py-2 mr-5 outline-none focus:border-blue-500'
				/>
				{/* Last Name input field */}
				<input
					type='text'
					placeholder='Course Code'
					className=' w-full py-2 border-b-[2px] outline-none focus:border-blue-500 '
				/>
			</div>
		</div>
	);
};

const CourseDetails = () => {
	return (
		<div className=' px-5 pb-4'>
			<input
				type='text'
				placeholder='Address'
				className='inline-block w-full py-6 border-b-[2px] outline-none focus:border-blue-500'
			/>
		</div>
	);
};

const CourseLength_StartDate = () => {
	return (
		<div className=' px-5 py-10'>
			<div className='gap-x-8 grid grid-cols-2'>
				<input
					type='text'
					required
					name='startDate'
					id='startDate'
					onFocus={(e) => (e.target.type = "date")}
					placeholder='Start From'
					className='inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500'
				/>

				<input
					type='text'
					required
					name='timelength'
					id='timelength'
					placeholder='Course Time Length'
					className='inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500'
				/>
			</div>
		</div>
	);
};

const CoursePrice_ProfessorName = () => {
	return (
		<div className=' px-5 py-10'>
			<div className='gap-x-8 grid grid-cols-2'>
				<select
					name='class'
					id='class'
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
					type='NUmber'
					placeholder='Course Price'
					className=' w-full py-2 border-b-[2px] outline-none focus:border-blue-500'
				/>
			</div>
		</div>
	);
};

export default AddCourseForm;
