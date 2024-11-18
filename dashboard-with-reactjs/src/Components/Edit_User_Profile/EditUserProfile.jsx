import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const EditUserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  // Handle name change event
  // Update the name state with the value from the input event
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  // Handle email change event
  // Update the email state with the value from the input event
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //Handle password change event
  // Update the password state with the value from the input event
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleIsUpdated = () => {
    if (name != "" && email != "" && password != "") {
      return true;
    } else {
      return false;
    }
  };

  // Handle file change event
  // Update the file state with the selected file
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();

    handleIsUpdated;

    console.log(`Submitted : ${file.size}  ${file.type}  ${file.name}`);
  };

  return (
    <>
      <div className="bg-2 flex flex-col items-center justify-center w-full h-screen px-3">
        <div className="md:w-4/5 h-fit w-full px-10 py-8 bg-white border rounded-md">
          <h1 className="pb-6 text-2xl font-bold">
            Edit User Profile from Demo
          </h1>

          <form action="" onSubmit={handleSubmit}>
            <NameInputField name={name} handleNameChange={handleChangeName} />
            <EmailInputFields
              email={email}
              handleEmailChange={handleEmailChange}
            />
            <PasswordInputFields
              password={password}
              handlePasswordChange={handlePasswordChange}
            />

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-lg">Upload Avatar</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={handleFileChange}
                aria-invalid={false}
              />
            </label>

            <Link
              to={isUpdated ? "/dashboard1" : "/edituserprofile"}
              className="inline-block px-5 py-1 mt-8 text-lg text-white bg-blue-300 rounded-full"
              type="button"
              onClick={() => setIsUpdated(handleIsUpdated)}
            >
              Sava Profile
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserProfile;

/**
 * Component for rendering the Name Input Field
 *
 * @param {string} name - The name input value
 * @param {function} handleNameChange - Function to handle name change
 */
const NameInputField = ({ name, handleNameChange }) => {
  // Render the Name Input Field component
  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="w-full">
          {/* Label for First Name */}
          <label htmlFor="name" className="inline-block pb-1 text-base">
            First Name
          </label>
          <br />
          {/* Input for First Name */}
          <input
            type="text"
            name="name"
            className="h-9 w-full border"
            value={name}
            onChange={handleNameChange}
          />
          <br />
        </div>
        <div className="w-full">
          {/* Label for Last Name */}
          <label htmlFor="lastname" className="inline-block pb-1 text-base">
            Last Name
          </label>
          <br />
          {/* Input for Last Name */}
          <input type="text" name="name" className="h-9 w-full border" />
        </div>
      </div>
    </>
  );
};

/**
 * Component for rendering the Email Input Fields
 *
 * @param {string} email - The email input value
 * @param {function} handleEmailChange - Function to handle email change
 */
const EmailInputFields = ({ email, handleEmailChange }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="w-full">
          {/* Label for Email */}
          <label htmlFor="name" className="inline-block pb-1 text-base">
            Enter Email
          </label>
          <br />
          {/* Input for Email */}
          <input
            type="email"
            name="name"
            value={email}
            required
            onChange={handleEmailChange}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            className="h-9 w-full border"
          />
          <br />
        </div>
        <div className="w-full">
          {/* Label for Confirm Email */}
          <label htmlFor="lastname" className="inline-block pb-1 text-base">
            Confirm Email
          </label>
          <br />
          {/* Input for Confirm Email */}
          <input
            type="email"
            name="name"
            required
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            className="h-9 w-full border"
          />
        </div>
      </div>
    </>
  );
};

/**
 * Component for Password Input Fields
 *
 * @param {string} password - The password input value
 * @param {function} handlePasswordChange - Function to handle password input changes
 */
const PasswordInputFields = ({ password, handlePasswordChange }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [IsShowPassword, setIsShowPassword] = useState(false);
  const [IsShowConfirmPassword, setIsConfirmShowPassword] = useState(false);

  /**
   * Toggle password visibility
   */
  const handleShowPassword = () => {
    setIsShowPassword((prevPassword) => !prevPassword);
  };

  //Handle changes in confirm password input
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  //Toggle confirm password visibility
  const handleShowConfirmPassword = () => {
    setIsConfirmShowPassword((prevPassword) => !prevPassword);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="w-full">
          {/* Label for Password */}
          <label htmlFor="name" className="inline-block pb-1 text-base">
            Enter Password
          </label>
          <br />
          <div className="h-9 flex items-center justify-between w-full gap-2 pr-2 overflow-hidden bg-white border rounded-sm">
            {/* Input for Confirm Password */}
            <input
              type={IsShowPassword ? "text" : "password"}
              name="password"
              className="w-full h-full pl-5 border-none rounded-sm outline-none"
              value={password}
              onChange={handlePasswordChange}
              required
              minLength={6}
              maxLength={12}
            />
            {IsShowPassword ? (
              <FaEyeSlash
                className=" text-2xl text-red-600 cursor-pointer"
                onClick={handleShowPassword}
              />
            ) : (
              <FaEye
                className=" text-2xl text-red-600 cursor-pointer"
                onClick={handleShowPassword}
              />
            )}
          </div>
        </div>
        <div className="w-full">
          {/* Label for Confirm Password */}
          <label htmlFor="lastname" className="inline-block pb-1 text-base">
            Confirm Password
          </label>

          <div className="h-9 flex items-center justify-between w-full gap-2 pr-2 overflow-hidden bg-white border rounded-sm">
            {/* Input for Confirm Password */}
            <input
              type={IsShowConfirmPassword ? "text" : "password"}
              name="password"
              className="w-full h-full pl-5 border-none rounded-sm outline-none"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              minLength={6}
              maxLength={12}
            />
            {IsShowConfirmPassword ? (
              <FaEyeSlash
                className=" text-2xl text-red-600 cursor-pointer"
                onClick={handleShowConfirmPassword}
              />
            ) : (
              <FaEye
                className=" text-2xl text-red-600 cursor-pointer"
                onClick={handleShowConfirmPassword}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
