import { Link } from "react-router-dom";

// Icon from react icons
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Login image
import image from "/src/assets/login.jpg";
import { useState } from "react";

/**
 * @description The Logout component is responsible for rendering the LogIn Page
 * @returns {JSX.Element}
 */
const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// Event handler to update the email state
	// Update the email state with the value from the input event
	const handleEmialChange = (e) => {
		setEmail(e.target.value);
	};

	// Event handler to update the password state
	// Update the password state with the value from the input event
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	/**
	 * @description Toggle the show password state
	 * This function is used to show or hide the password on the login page
	 */
	const handleShowPassword = () => {
		/**
		 * Toggle the isShowPassword state isShowPassword is a boolean state that is used to
		 * show or hide the password on the login page
		 */
		setIsShowPassword((prevPassword) => !prevPassword);
	};

	/**
	 * @description Event handler for the form submit event
	 * This function is called when the user submits the login form
	 */
	const handleSubbit = (e) => {
		e.preventDefault();
		// Log the email and password in the console
		console.log(email, password);
		// Reset the email and password state to empty strings
		setEmail("");
		setPassword("");
	};

	/**
	 * @description Verify if the user is logged in. This function is called when the user
	 *  submits the login form and checks if the email and password are correct.
	 *  @returns {boolean} - True if the user is logged in, false otherwise
	 */
	const handleIsLoggedIn = () => {
		// Check if the email and password are correct
		if (email === "admin" && password === "admin") {
			// If the email and password are correct set the error message to an empty string
			setShowErrorMessage("");
			// Return true if the user is logged in
			return true;
		} else if (email === "user" && password === "user") {
			setShowErrorMessage("");
			// Return true if the user is logged in
			return true;
		} else if (email === "wilma" && password === "wilma") {
			setShowErrorMessage("");
			// Return true if the user is logged in
			return true;
		} else {
			// If the email and password are incorrect set the error message to "Invalid username or password"
			setShowErrorMessage("Invalid username or password");
			// Return false if the user is not logged in
			return false;
		}
	};

	return (
		<>
			<div className='bg-2 flex items-center justify-center w-screen h-screen py-6'>
				{/* // LogIn Page Parent div */}
				<div className='lg:w-[940px] w-full h-fit bg-white rounded-md  flex justify-center items-center flex-wrap py-5  px-4 gap-6 relative'>
					<LoginKeys />
					{/* // LogIn Page Form */}
					<form
						className=' md:w-[460px] w-full h-fit px-4 py-8'
						onSubmit={handleSubbit}
					>
						<h1 className='text-3xl font-bold pb-1'>Welcome Back</h1>
						<p className='text-base pb-5'>
							Welcome back, Please fill in your details
						</p>

						{/* // Form Fields label one and text field one  */}
						<label htmlFor='email' className='pb-1 inline-block'>
							Username/Email
						</label>
						<div className='w-[95%] h-10 mb-5 bg-white rounded-sm overflow-hidden border'>
							<input
								type='email'
								className='outline-none border-none  w-full h-full rounded-sm pl-5'
								value={email}
								onChange={handleEmialChange}
								required
							/>
						</div>

						{/* // Form Fields label two and text field two */}
						<label htmlFor='password' className='pb-1 inline-block'>
							Password
						</label>
						<div className='w-[95%] h-10 mb-5 bg-white rounded-sm overflow-hidden border flex justify-between items-center gap-2 pr-2'>
							<input
								type={isShowPassword ? "text" : "password"}
								name='password'
								className='outline-none border-none  w-full h-full rounded-sm pl-5'
								value={password}
								onChange={handlePasswordChange}
								required
								minLength={6}
								maxLength={12}
							/>
							{isShowPassword ? (
								<FaEyeSlash
									className='text-2xl text-red-600 cursor-pointer '
									onClick={handleShowPassword}
								/>
							) : (
								<FaEye
									className='text-2xl text-red-600 cursor-pointer '
									onClick={handleShowPassword}
								/>
							)}
						</div>

						{/* // Error message */}
						<p className='text-red-600 pb-2'>{showErrorMessage}</p>
						{/* // Form submit button */}
						<Link to={isLoggedIn ? "/dashboard1" : "/"}>
							<button
								type='submit'
								className='w-[95%] h-12 bg-black text-white  text-lg rounded-md'
								onClick={() => setIsLoggedIn(handleIsLoggedIn)}
							>
								Sign In
							</button>
						</Link>

						{/* // Form link if you don't have an account */}
						<p className='text-center pt-4'>
							Don&apos;t have an account?
							<Link to='createaccount' className='font-bold pl-1 inline-block'>
								Sign up today!
							</Link>
						</p>
					</form>
					{/* // LogIn Page Image Wripper div */}
					<div className='w-[380px] md:h-[500px] h-[300px] rounded-lg overflow-hidden md:order-last order-first'>
						<img
							src={image}
							alt={image}
							className='object-cover w-full h-full'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default LogIn;

// Login Key component
const LoginKeys = () => {
	return (
		<>
			<div className='absolute md:top-0 bottom-[490px] md:right-0 right-5 bg-2 w-4/12 h-fit px-4 py-1 rounded-l-sm text-white md:block '>
				<div className='flex justify-between gap-3'>
					<div className=''>
						<span>Key 1</span>
						<h1>User Name : admin </h1>
						<h1>Password : admin </h1>
					</div>
					<div className=''>
						<span>Key 1</span>
						<h1>User Name : user </h1>
						<h1>Password : user </h1>
					</div>
				</div>
			</div>
		</>
	);
};
